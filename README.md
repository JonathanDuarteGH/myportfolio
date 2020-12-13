# Portfolio

My personal portfolio features frontend Gatsby app and a backend Strapi api using GraphQL as an endpoint to fetch queried data. React is used as a framework to pull every component together while Formspree is used as a custom form backend for my contact.

I've added the code to GitHub so that the general public can view a snippet around my code.

Please take a look around my website at [jonathanduarte.io](http://google.com).

## Strapi

[Strapi](https://strapi.io/) is a flexible, open-source Headless CMS that gives developers the freedom to choose their favorite tools and frameworks while also allowing editors to easily manage and distribute their content. By making the admin panel and API extensible through a plugin system, Strapi enables the world's largest companies to accelerate content delivery while building beautiful digital experiences.

The API has the following features:

### Custom Content Structure
Generate an admin panel and a CMS with relative ease using Content-Types Builder Media Library, Collection Types, and Single Types.

### Easy Content Management
Strapi's admin panel has the ability to create, edit and delete your content.

### Developer-Friendly API
Strapi provides an API that will easily display content to the world. It fetches any data you might need via a REST API or GraphQL endpoint.

### Roles & Permissions
Strapi has a built-in user system that allows you to manage who can access what.

### Plugin system
Plugins are available in the marketplace for features that need to connect or support your API to 3rd party services.

### Other features
- API is configured for production vs. development environments via an external `config.js` file (not present in this repo) which is deployed along with the Node.js application code.

- Clients wishing to authenticate and access full REST API functionality (`POST`, `PUT` and `DELETE` actions for example) must authenticate by including a Base64 hash of their username and password in their request's `Authorization`.

- For all features, please visit the official [Strapi](https://strapi.io/documentation/v3.x/getting-started/introduction.html) documentation.