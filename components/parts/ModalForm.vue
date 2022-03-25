<template>
  <div>
    <!--Buttons-->
    <ul class="navbar-nav">
      <li class="nav-btn">
        <button class="btn btn-sm btn-dark mr-2"
                @click="open('log'), title='Вход', placeholder=' или email', btnText='Войти', show=!show">
          Вход
        </button>
      </li>
      <li class="nav-btn">
        <button class="btn btn-sm btn-outline-secondary"
                @click="open('reg'), title='Регистрация', placeholder='', btnText='Зарегистрироваться', show=!show">
          Регистрация
        </button>
      </li>
    </ul>
    <!--Modal-->
    <transition name="modal-fade">
      <div v-if="show" class="modal-backdrop" @click="close()"/>
    </transition>
    <transition name="modal-fade">
      <div v-if="show" class="v-modal">
        <!--Modal Content-->
        <div class="modal-content">
          <!--Header-->
          <div class="tab-pane fade" style="opacity: unset">
            <ul class="modal-header p-0 nav nav-tabs">
              <!--Tabs-->
              <li class="nav-item d-flex">
                <!--Title-->
                <h5 id="log" class="nav-link modal-title" data-toggle="tab"
                    @click="title='Вход', placeholder=' или email', btnText='Войти'">
                  Вход
                </h5>
                <!--Title-->
                <h5 id="reg" class="nav-link modal-title" data-toggle="tab"
                    @click="title='Регистрация', placeholder='', btnText='Зарегистрироваться'">
                  Регистрация
                </h5>
              </li>
              <!--Close button-->
              <li class="p-2">
                <button class="close" type="button" @click="close()">&times;</button>
              </li>
            </ul>
          </div>
          <!--Body-->
          <div class="modal-body">
            <!--Form-->
            <form action="" method="post">
              <!--Login-->
              <div class="form-group">
                <label class="h5" for="SignUpLogin">Логин</label>
                <input id="SignUpLogin" :placeholder="'Введите логин' + placeholder" class="form-control"
                       name="username" required type="text">
              </div>
              <!--Email-->
              <div v-if="title === 'Регистрация'" class="form-group">
                <label for="email">Email адрес</label>
                <input id="email" class="form-control" name="email" placeholder="Введите email" required
                       type="email">
              </div>
              <!--Password-->
              <div class="form-group">
                <label class="h5" for="password1">Пароль</label>
                <!--First pass-->
                <div class="mb-2">
                  <i id="showPass" @click="showPassword === !showPassword">Show Pass</i>
                  <input id="password1" class="form-control" name="password1" placeholder="Введите пароль"
                         required type="password">
                </div>
                <!--Second pass-->
                <input v-if="title === 'Регистрация'" id="password2" class="form-control" name="password2"
                       placeholder="Введите пароль еще раз" required type="password">
              </div>
              <!--Remember-->
              <div v-if="title === 'Вход'" class="form-check">
                <input id="rememberMe" class="form-check-input position-static" name="rememberMe" type="checkbox">
                <label class="form-check-label" for="rememberMe">Запомнить меня</label>
              </div>
              <!--Button-->
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-secondary mr-2" type="button" @click="close()">Отмена</button>
                <button class="btn btn-dark" name="authorization" type="submit">{{ btnText }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      title: "",
      placeholder: "",
      btnText: "",
      showPassword: true
    }
  },
  methods: {
    open(clicked) {
      setTimeout(() => {
        (clicked === "log") ?
          document.getElementById("log").classList.add("active")
          :
          document.getElementById("reg").classList.add("active")
      }, 1, clicked)
    },
    close() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>

.v-modal {
  left: calc(50% - 200px);
  overflow: hidden;
  position: fixed;
  width: 400px;
  z-index: 1050;
}

.modal-backdrop {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
}

.modal-fade-enter, .modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}
</style>
