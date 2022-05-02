import installDevtools from '@layer0/devtools/install'
import install from '@layer0/prefetch/window/install'

document.addEventListener('DOMContentLoaded', function () {
  installDevtools()
  install()
})
