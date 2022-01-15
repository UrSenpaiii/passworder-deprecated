<template>
  <div class="container">
    <main>
      <h1>profile</h1>
      ${user?string}
      ${user.username}
      <form action="/logout" method="post">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <input type="submit" value="logout">
      </form>
    </main>
  </div>
</template>
