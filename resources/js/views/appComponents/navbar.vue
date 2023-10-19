<template>
    <div class="navbar-container">
        <nav class="navbar">
            <div class="navbar-left">
                <ul class="navbar__list">
                    <li class="navbar__list-item">
                        Home
                    </li>
                    <li class="navbar__list-item">
                        Servers
                    </li>
                </ul>
            </div>

            <div class="navbar-center">
                <ul class="navbar__list">
                    <li class="navbar__list-item">
                        Disverse © Wolfsvale Software
                    </li>
                </ul>
            </div>

            <div class="navbar-right">
                <ul class="navbar__list">
                    <li class="navbar__list-item" @click="discordAuth">
                        Login
                    </li>
                    <li class="navbar__list-item">
                        Register
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import {discord_auth} from '../../../../secrets'

export default {
    name: 'navBar',
    mounted() {
        console.log(discord_auth.client_id)
    },
    methods: {
        discordAuth() {
            const clientId = discord_auth.client_id
            const redirectUri = discord_auth.redirect_uri
            const scope = 'identify'

            window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}`;
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../../sass/views/appComponents/navbar";
</style>
