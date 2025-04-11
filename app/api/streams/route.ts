import { prismaClient } from "@/app/lib/db";
import { url } from "inspector";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const YT_URL_REGEX= new RegExp ("https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})(?:&[^\s]*    )?")

const CreatreStreamSchema=z.object({
creatorId:z.string(),
url:z.string()
})

export async function POST(req:NextRequest){
    try
    {
        const data=CreatreStreamSchema.parse(await req.json())
const isYt=YT_URL_REGEX.test(data.url)
if(!isYt){
    return NextResponse.json({
        message:"Wrong Url format "
    }),
    {
        status:411
    }
}
const extractedId=data.url.split("?v=")[1].split("&")[1]



       await  prismaClient.stream.create({
            data:{
                userId:data.creatorId,
            url:data.url,
            ytId:extractedId
            ,
            type:"youtube"
            }

        })
    }
catch(e){
    return NextResponse.json({
        message:"Error while adding a stream "
    }),
    {
        status:411
    }
}

}