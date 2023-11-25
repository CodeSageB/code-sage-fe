import { MenuItem } from '../schema/menu-item';
import { BlogForm, BlogRequest, CreateBlogTranslation } from '../schema/blog';

export class Utils {
  public static readonly MENU_ITEMS: MenuItem[] = [
    { name: 'home', url: '' },
    { name: 'blog', url: '/blogs' },
    { name: 'about' },
    { name: 'newsletter', color: 'primary' },
  ];

  public static MapBlogRequest(createBlogForm: BlogForm): BlogRequest {
    const translations: CreateBlogTranslation[] = createBlogForm.blogs.getRawValue().map((blog) => {
      return {
        title: blog.title,
        content: blog.content,
        language: blog.language,
      };
    });

    return {
      translations,
      tags: createBlogForm.tags.getRawValue(),
    };
  }
}
