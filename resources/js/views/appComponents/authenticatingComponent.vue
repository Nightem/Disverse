<template>
    <div class="authHeader">
        <h1>Logging you in...</h1>
        <p>Seeing this page for a long time? Check the <a class="authHeader__subtextLink" href="https://status.discord.com">discord status page</a> or contact us.</p>
        <div class="authHeader__socials">
            <a class="authHeader__socials-coloured" href="https://discord.gg/Ukr89GrMBk" target="_blank">
                <i class="fab fa-discord fa-3x"></i>
            </a>
            <a class="authHeader__socials-coloured" href="https://linkedin.com/company/wolfsvale" target="_blank">
                <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a class="authHeader__socials-coloured" href="mailto:support@wolfsvale.tech" target="_blank">
                <i class="fas fa-envelope fa-3x"></i>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { discord_auth } from '../../../../secrets';
import router from "../../router/IndexRouter";

export default {
    mounted() {
        const code = this.$route.query.code;
        const clientId = discord_auth.client_id;
        const clientSecret = discord_auth.client_secret;
        const redirectUri = discord_auth.redirect_uri; // Should match the redirect URI set in Discord Developer Portal

        const formData = new URLSearchParams();
        formData.append('client_id', clientId);
        formData.append('client_secret', clientSecret);
        formData.append('grant_type', 'authorization_code');
        formData.append('code', code);
        formData.append('redirect_uri', redirectUri);
        formData.append('scope', 'identify');

        axios.post('https://discord.com/api/oauth2/token', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                // Handle the response, typically store the access token in local storage or Vuex
                const accessToken = response.data.access_token;
                localStorage.setItem('authToken', accessToken);
                router.push('/')
            })
            .catch(error => {
                console.error(error);
            });
    }
};
</script>


<style scoped lang="scss">
@import "../../../sass/views/appComponents/authenticatingComponent";
</style>
