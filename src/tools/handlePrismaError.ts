import { Prisma } from "@prisma/client";


export function handlePrismaError(error: unknown){
    if (error instanceof Prisma.PrismaClientKnownRequestError){
        switch (error.code) {
            case 'P2002': 
                console.log(error.message)
                throw error;
            
            case 'P2015':
                console.log(error.message);
                throw error;
            
            case 'P2019':
                console.log(error.message)
                throw error;
        }
    }
}