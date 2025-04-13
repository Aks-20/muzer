import { prismaClient } from "@/app/lib/db";
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
        return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
    }

    try {
        const data = UpvoteSchema.parse(await req.json());
        
        await prismaClient.Upvote.create({
            data: {
                streamId: data.streamId,
                userId: user.id
            }   
        });
        
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
        }
        
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}