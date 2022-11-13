<template>
  <rxz-menu :items="items" active="1-3-2"></rxz-menu>
  <p>---</p>
  <div class="verticle-unflod">
    <rxz-menu :items="items" direction="vertical" active="1-3-2"></rxz-menu>
  </div>

  <p>---</p>
  <div class="verticle-flod">
    <rxz-menu :items="items" direction="vertical" :isFold="true" active="1-3-2"></rxz-menu>
  </div>


</template>
<script lang="ts">
export default {
  data () {
    return {
      items: [
        {
          name: '父菜单1',
          key: '1',
          icon: 'edit',
          onClick: () => {
            console.log(1);
          }
        },
        {
          name: '父菜单21111',
          children: [
            {
              name: '子菜单122222222222222222222222',
              key: '1-1',
            },
            {
              name: '子菜单222222222222222222222222',
              key: '1-2',
              onClick: () => {
                console.log(1);
              }
            },
            {
              name: '子菜单3',
              children: [
                {
                  name: '子子菜单1',
                  key: '1-3-1'
                },
                {
                  name: '子子菜单2',
                  children: [
                    {
                      name: '子子2菜单1',
                      key: '1-3-2-1'
                    },
                    {
                      name: '子子2菜单2',
                      key: '1-3-2-1'
                    },
                    {
                      name: '子子2菜单3',
                      key: '1-3-2-1'
                    },
                    {
                      name: '子子2菜单4',
                      key: '1-3-2-1'
                    },
                  ],
                  key: '1-3-2'
                },
                {
                  name: '子子菜单3',
                  key: '1-3-3'
                },
                {
                  name: '子子菜单4',
                  key: '1-3-4'
                },
              ],
              key: '1-3'
            },
            {
              name: '子菜单4',
            },
          ],
          key: '2',
          icon: 'edit'
        },
        {
          name: '父菜单3',
          key: '3',
          icon: 'edit'
        },
        {
          name: '父菜单4',
          key: '4'
        },
      ]
    }
  }
};
</script>
<style>
.verticle-unflod {
  width: 300px;
}

.verticle-flod {
  width: fit-content;
}
</style>
