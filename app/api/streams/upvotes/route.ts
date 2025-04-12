import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import {NextRequest, NextResponse} from  "next/server";   
import { z } from "zod";
const UpvoteSchema = z.object({
    streamId: z.string()
   
})

export async function POST(req: NextRequest) {
    const session =  await getServerSession();


    const user=await prismaClient.user.findfirst({
        where:{
            email:session?.user?.email ??""
        }
    })
    if (!user) {
        return NextResponse.json({ error: "Unauthenticated " }, { status: 403 });
    }
   try {
    const data =UpvoteSchema.parse(await req.json());
    await prismaClient.Upvote.create({
        data:{
            streamId:data.streamId,
            userId:user.id
        }   
    })
   } catch (error) {
    return NextResponse.json({ error: "Unauthenticated " }, { status: 403 });
   } 
    
    
}