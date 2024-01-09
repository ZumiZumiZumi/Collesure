import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../prisma/generated/client'

// 新規登録処理
const createuser = (async(req: NextApiRequest, res: NextApiResponse) => {
    console.log("a");
    const prisma = new PrismaClient();
    if (req.method == 'POST') {
        const user = await prisma.users.create({
            data: {
                user_name:req.body.user_name,
                user_mail:req.body.user_mail,
                user_pass:req.body.user_pass,
                user_icon:req.body.user_icon,
                user_coment:req.body.user_coment,
            },
        });
        res.status(200).json(user)
    }
    // const { user_mail, user_pass, user_name, user_icon, user_coment} = req.body;
    
});

export default createuser

// 記事全件取得
// router.get("/search",async(req: NextApiRequest, res: NextApiResponse) => {
//     const prisma = new PrismaClient();
//     const art = await prisma.articles.findMany();
//     res.json(art);
// });

//記事投稿
// router.post("/signup",async(req: NextApiRequest, res: NextApiResponse) => {
//     const prisma = new PrismaClient();
//     const {article_title,article_image}
// });
