import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BlogsService {
async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log('getting blogs', res.data)

}
}

export const blogsService = new BlogsService()