export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604afa470a0e9356b605eeab',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-5irywzeg',
                  apiId: '1bbd1d1c-9554-442e-b2df-9f9a004400e0'
                },
                {
                  buildHookId: '604afa474ccb9946dc58d088',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-muyxvcvw',
                  apiId: 'cfd594f5-c794-4e97-ae1f-0152f6f433e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bmehder/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-muyxvcvw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
