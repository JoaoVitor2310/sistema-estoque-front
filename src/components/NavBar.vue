<template>
    <main>
        <nav class="navbar navbar-expand-lg bg-warning">
          <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">
              <img src="@\assets\images\logo.jpg" width="45" height="45" alt="logo"></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="/login">Login</RouterLink>
                </li>
                <li><RouterLink class="nav-link" to="/venda-chave-troca">Venda-Chave-Troca</RouterLink></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Taxas
                  </a>
                  <ul class="dropdown-menu">
                    <li><RouterLink class="dropdown-item" to="/taxas">MarketPlaces</RouterLink></li>
                    <li><RouterLink class="dropdown-item" to="/ranges-taxa-G2A">Ranges Taxa G2A</RouterLink></li>
                    <!-- <li><RouterLink class="dropdown-item" to="/taxas">Calculadora</RouterLink></li> -->
                  </ul>
                </li>
                <li><RouterLink class="nav-link" to="/recursos">Recursos</RouterLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
</template>