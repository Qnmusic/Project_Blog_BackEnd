import DbConnect from './dbconnect';

class getTopicsPosts {
    constructor() { };

    async getTopicsPosts(idPosts: number) {
        try {
            const initDbConnect: DbConnect = new DbConnect();
            const data: any = await initDbConnect.query(`SELECT t.tocpicName FROM posttopic p JOIN topics t ON t.tocpicName = p.topicName WHERE idPost = ${idPosts} `);
            return data.map((item: any) => item.tocpicName);
        } catch (error) {
            console.log('Error in class => getTopicsPosts method => getTopicsPosts: ', error);
            throw new Error(String(error));
        };
    };
};

export default getTopicsPosts;
