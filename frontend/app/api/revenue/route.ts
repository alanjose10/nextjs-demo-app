
import prisma from '../../lib/prisma';

export async function GET(request: Request) {

    const data = await prisma.revenue.findMany();
    return Response.json(data);
}