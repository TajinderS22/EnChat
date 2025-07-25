import {PrismaClient} from '../client'

const globalForPrisma = globalThis as unknown as{
    prisma: PrismaClient | undefined 
}


export const  prisma= globalForPrisma.prisma ?? new PrismaClient()


if(process.env.NODE_ENV !=="Production") globalForPrisma.prisma=prisma