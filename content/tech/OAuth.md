---
type: concept
author: Emanuel Regnath
date: 2023-09-01
lang: en
share: true
category: tech
---

OAuth2 is a protocol to share access tokens between different parties. OAuth is not an authentication protocol because it says absolutely nothing about the user. It is only concerned about tokens.

> 🎯 Goal: An **application** (e.g. Printing) can access a **content provider** (e.g. Cloud Gallery) on behalf of a **user** by passing an access token. 

Advantage: The service does not need to know any details about the user (e.g. username and password).

Both OAuth 1.0a & 2.0 support **two-legged authentication**, where a server is assured of a user's identity, and **three-legged authentication**, where a server is assured by a content provider of the user's identity. Three-legged authentication is where authorization requests and access tokens come into play, and it's important to note that OAuth 1 has those, too.

## Protocol Details
The usual flow of the protocol is as following:

```
 +--------+                               +---------------+
 |        |--(A)- Authorization Request ->|   Resource    |
 |        |                               |     Owner     |
 |        |<-(B)-- Authorization Grant ---|    (User)     |
 |        |                               +---------------+
 |        |
 |        |                               +---------------+
 |        |--(C)-- Authorization Grant -->| Authorization |
 | Client |                               |     Server    |
 |  App / |<-(D)----- Access Token -------|     (IDP)     |
 | Service|                               +---------------+
 |        |
 |        |                               +---------------+
 |        |--(E)----- Access Token ------>|    Resource   |
 |        |                               |     Server    |
 |        |<-(F)--- Protected Resource ---|(Content Prov.)|
 +--------+                               +---------------+
```

1. The _application_ requests authorization to access service resources from the _user_
2. If the _user_ authorized the request, the _application_ receives an authorization grant
3. The _application_ requests an access token from the _authorization server_ (API) by presenting authentication of its own identity, and the authorization grant
4. If the application identity is authenticated and the authorization grant is valid, the _authorization server_ (API) issues an access token to the application. Authorization is complete.
5. The _application_ requests the resource from the _resource server_ (API) and presents the access token for authentication
6. If the access token is valid, the _resource server_ (API) serves the resource to the _application_

> [!example] Printing online Photos
> Alice (Resource Owner) has stored Photos (Resource) at a Cloud Storage (Resource Server). She wants to enable a company PrintMagic (Client) to access a certain folder and print the photos.
## Components

### Roles
* **Resource Owner:** Entity (e.g. **User**) that owns resources and wants a service to use it. 
* **Resource Server:** The **content provider** for the resources, e.g. a cloud storage.
* **Client**: An **service** that wants to access resources of the user.
* **Authorization Server**: An **Identity Provider** that authenticates the resource owner.

### Data
OAuth 2 uses and authorization grant and two types of tokens:

* **authorization grant:** Can be one of three types:
	* **Authorization Code**: used with server-side Applications (most common)
	- **Client Credentials**: used with Applications that have API access
	- **Device Code**: used for devices that lack browsers or have input limitations
* **refresh token**. The refresh token becomes the permanent password equivalent, and it's _only ever transmitted over SSL_.
* **access token:** To access content, the service exchanges the refresh token for a short-lived access token. That way all sniffable HTTP accesses are made with a token that will expire. Google uses 5 minute expiration on their OAuth 2 APIs.


## Further Details

* OpenID Connect is an authentication framework based on OAuth2
* Google provides an API key for any app (e.g. auth0.com) that wants to use their authentication service. 
* Google Console: There you receive the API key for your application



![](https://youtu.be/ZV5yTm4pT8g)


## 📚 References
* [An Introduction to OAuth 2 | DigitalOcean](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
* [OAuth 2.0: Benefits and use cases — why? - Stack Overflow](https://stackoverflow.com/questions/7561631/oauth-2-0-benefits-and-use-cases-why "https://stackoverflow.com/questions/7561631/oauth-2-0-benefits-and-use-cases-why")

