<template>
    <div v-if="profile" class="container">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-3">
                        <img :src="profile.picture" :alt="profile.name" class="rounded-circle">
                    </div>
                    <div class="col-3">

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
// import { profile } from 'console';
// import { on } from 'events';
import { onMounted, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import {profilesService} from '../services/ProfilesService.js'

export default {
    setup(){
        const route = useRoute()
        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                await profilesService.getProfileById(profileId)
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }

        onMounted(() => {
            getProfileById()
        })

        onUnmounted(() => {
            getProfileById()
        })

        return {
            profile: computed(() => AppState.profile)
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-picture {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  box-shadow: 2px 2px 4px black;
}
</style>