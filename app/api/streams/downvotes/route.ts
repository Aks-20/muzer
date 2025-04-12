import { prismaClient } from "@/app/lib/db";
import { log } from "console";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

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

        await prismaClient.upvote.delete({
            where: {
                user_id_streamId: {
                    streamId: data.streamId,
                    userId: user.id,
                },
            },
        });

        return NextResponse.json({ message: "Upvote removed successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error removing upvote:", error);
        return NextResponse.json({ error: "Failed to remove upvote" }, { status: 500 });
    }

   
}
