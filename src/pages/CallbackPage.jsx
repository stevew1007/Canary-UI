import { encode } from "js-base64";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useRouter } from "next/router";

const ESI_CLIENT_ID = import.meta.env.VITE_ESI_CLIENT_ID;
const ESI_SECRET_KEY = import.meta.env.VITE_ESI_SECRET_KEY;

const CallbackPage = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const code = new URLSearchParams(search).get("code");
    const state = new URLSearchParams(search).get("state");

    useEffect(() => {
        if (!code || !state) navigate("/");
        if (typeof code === "string") {
            void handleAuth();
            // console.log("Receieved callback!");
        }
    });

    const handleAuth = async () => {
        const url = new URL("https://login.eveonline.com/v2/oauth/token");
        // url.searchParams.append("grant_type", "authorization_code");
        // url.searchParams.append("code", code);
        console.log("url::: ", url);

        const auth = encode(ESI_CLIENT_ID + ":" + ESI_SECRET_KEY);
        console.log("auth::: ", auth);

        let bodyValues = { grant_type: "authorization_code", code: code };
        const formBody = Object.keys(bodyValues)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(bodyValues[key])
            )
            .join("&");
        console.log("formBody::: ", formBody);
        const option = {
            method: "POST",
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
                Host: "login.eveonline.com",
            },
            body: formBody,
        };
        console.log("option::: ", option);
        let response;
        try {
            response = await fetch(url, option);
            // console.log("response::: ", await response.json());
        } catch (error) {
            response = {
                ok: false,
                status: 500,
                json: () => {
                    return {
                        code: 500,
                        message: "The ESI server is unresponsive",
                        description: error?.toString(),
                    };
                },
            };
        }
        if (await response.ok) {
            console.log("response.json::: ", await response.json());
        }
    };

    return <div>Processing OAuth2 callback...</div>;
};

export default CallbackPage;
