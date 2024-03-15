export const articleQuery = `
{
  article {
    title
    excerpt
    featured_image
    date_of_publication
    category {
      ...on article_category {
        ...article_categoryFields
      }
    }
    author {
      ...on author {
        ...authorFields
      }
    }
  }
}
`;