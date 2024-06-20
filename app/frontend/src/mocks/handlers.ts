import {http, HttpResponse} from 'msw'

export const handlers = [
    http.get('/auth_setup', () => {
        return HttpResponse.json({
            useLogin: false,
            requireAccessControl: false,
            enableUnauthenticatedAccess: true,
            msalConfig: {
                auth: {
                    clientId: "00000000-0000-0000-0000-000000000000",
                    authority: "https://login.microsoftonline.com/00000000-0000-0000-0000-000000000000",
                    redirectUri: "/",
                },
                cache: {
                    cacheLocation: "localStorage",
                    storeAuthStateInCookie: false,
                },
            },
            loginRequest: {
                scopes: [],
            },
            tokenRequest: {
                scopes: [],
            },
        })
    })
]