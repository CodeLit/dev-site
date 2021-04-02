<template>
  <div class="w-full p-5 sm:p-0 sm:w-auto">
    <div class="container 2xl:px-72">
      <div class="blurred-card flex sm:mt-36">
        <div class="blurred-card p-5" style="box-shadow: 1px 1px white inset">
          <b-user-card :col="true">
            <b-round-box alt="User's avatar" :url="avatar" width="200px" />
            <div class="flex flex-col">
              <p class="name text-white text-2xl mt-3">UserName</p>
              <p class="job text-gray-200 text-lg">UserJob</p>
            </div>
          </b-user-card>
        </div>
        <div class="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ea error nemo. Omnis, aliquam nobis. Libero tempora similique a dicta
          perspiciatis aliquid doloremque id quisquam nisi. Cupiditate inventore
          consequuntur quidem. Quidem quis recusandae voluptate at quam
          praesentium porro non eos incidunt delectus exercitationem, expedita
          quasi hic, iure nesciunt libero corporis? Ipsam dignissimos incidunt
          aspernatur eos assumenda distinctio officiis sapiente esse.
        </div>
      </div>
    </div>
    <b-circle-bg class="left-20 sm:left-56 top-10 sm:top-72 rotate-45" />

    <b-circle-bg
      class="right-20 sm:right-56 top-96 sm:top-20"
      style="transform: rotate(225deg)"
    />
  </div>
</template>
<script>
import avatar from '../../../images/avatar.jpg'
export default {
  data() {
    return { avatar: avatar }
  },
}
</script>
