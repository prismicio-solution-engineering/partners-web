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

export const reviewsChecklistQuery = `
{
  reviews_checklist {
    criteria {
      name
      category {
        ...on review_criteria_category {
          ...review_criteria_categoryFields
        }
      }
      comment_next
      comment_nuxt
      comment_sveltkit
      priority
      is_slice_library
      is_full_project
      review_helper
      where_to_check
    }
  }
}
`;