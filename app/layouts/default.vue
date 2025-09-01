<template>
  <main>
    <!-- //* Navbar that collapses *// -->
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img
            src="/images/nw-chickens-rect-logo-150.jpg"
            class="img-thumbnail"
            alt=""
            width="150"
            height="90"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/coops-runs" class="nav-link"
                >Coops & Runs</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/breeds" class="nav-link">Breeds</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/feeds" class="nav-link">Feeds</NuxtLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <!-- //* Slot for Router View *// -->
    <slot />

    <footer class="footer bg-body-tertiary p-5">
      <img
        src="/images/nw-chickens-rect-logo-150.jpg"
        class="img-thumbnail"
        alt=""
        width="250"
        height="150"
      />
      <div>
        <ul class="list-unstyled">
          <li>
            <NuxtLink
              to="/"
              class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/coops-runs"
              class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Coops & Runs</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/breeds"
              class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Breeds</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/feeds"
              class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >Feeds</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div>
        <ul class="socials list-unstyled">
          <li class="py-3">
            <a href="#" class="link-success"
              ><i class="fa-brands fa-facebook fa-2xl"></i
            ></a>
          </li>
          <li class="py-3">
            <a href="#" class="link-success"
              ><i class="fa-brands fa-instagram fa-2xl"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </main>
</template>

<script setup></script>

<style></style>
