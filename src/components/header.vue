<template>
  <div class="container">
    <b-navbar toggleable="lg" type="light" variant="none">
      <b-navbar-brand href="/">
        <img :src='$parent.logo' alt="Строй модуль быт"/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <router-link v-for="item in items"
                       v-bind:key="item.name"
                       tag="b-nav-item"
                       :exact="item == items[0]"
                       :to="item.link">
            {{ item.name }}
          </router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <div class="contacts">
              <b-link v-for="contact in contacts"
                      v-bind:key="contact.value"
                      :href="contact.link">
                <font-awesome-icon :icon="contact.icon" />
                {{ contact.value }} <br/>
              </b-link>
            </div>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { 'name': 'Главная', 'link': "/" },
        ...this.$parent.items,
        { 'name': 'Контакты', 'link': "/contacts" },
      ],
      contacts: [
        {
          'icon': 'phone',
          'link': 'tel:' + this.$parent.telephone.replace(/ /g, ''),
          'value': this.$parent.telephone,
        },
        {
          'icon': 'envelope',
          'link': 'mailto:' + this.$parent.email,
          'value': this.$parent.email,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.navbar-brand {
  font-size: 1rem!important;
  font-weight: bold;

  &::nth-child(2) {
    border: 1px solid green;
    color: $red!important;
  }
}

.navbar-nav {
  font-size: 11pt;
  font-weight: bold;
}

.router-link-active a {
  color: $blue!important;
}

.contacts {
  text-align: right;

  & a {
    color: $black;

    &:hover {
      text-decoration: none;
    }
  }

  & svg {
    color: $blue;
  }
}
</style>
