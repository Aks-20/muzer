import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const UpvoteSchema = z.object({
    streamId: z.string()
});

export async function POST(req: NextRequest) {
    const session = await getServerSession();

    const user = await prismaClient.user.findFirst({
        where: {
            email: session?.user?.email ?? ""
        }
    });

    if (!user) {
        return NextResponse.json({ error: "Unauthenticated" }, { status: 403 });
    }

    try {
        const data = UpvoteSchema.parse(await req.json());

        try {
            await prismaClient.upvote.delete({
                where: {
                    user_id_streamId: {
                        streamId: data.streamId,
                        userId: user.id,
                    },
                },
            });
            
            return NextResponse.json({ message: "Upvote removed successfully" }, { status: 200 });
        } catch (deleteError) {
            // Check if error is because record not found (P2025 is Prisma's "Record not found" error code)
            if (deleteError instanceof PrismaClientKnownRequestError && deleteError.code === 'P2025') {
                return NextResponse.json({ message: "Upvote did not exist" }, { status: 404 });
            }
            throw deleteError; // Re-throw other errors to be caught by outer catch block
        }
    } catch (error) {
        console.error("Error removing upvote:", error);
        
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
        }
        
        return NextResponse.json({ error: "Failed to remove upvote" }, { status: 500 });
    }
}