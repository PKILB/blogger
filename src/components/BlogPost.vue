<template>
    <div class="col-12 border border-dark rounded-top rounded-bottom">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <router-link :to="{ name: 'Profile', params: { profileId: blog.creatorId}}">
                        <div class="col-12 d-flex align-items-center my-3">
                                <img class="profile-picture" :src="blog.creator.picture" :alt="blog.creator.name">
                                <h6 class="ms-3">{{ blog.creator.name }}</h6>
                        </div>
                    </router-link>
                </div>
                <h5>{{ blog.title }}</h5>
                <p>{{ blog.body }}</p>
            </div>
            <div class="col-4">
                <img class="img-fluid my-3 rounded" :src="blog.img" :alt="blog.title">
            </div>
        </div>

    </div>
</template>


<script>
import { Blog } from '../models/Blog.js';

export default {
    props: {
        blog: {
            type: Blog,
            required: true
        }
    },
    setup(){
        return {}
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