import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Meta from 'components/Common/Meta';
import Scripts from 'components/Common/Scripts';
import { useEffect, memo } from 'react';
import $ from 'jquery';
import 'popper.js';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
  // import('jquery');
  // @ts-ignore
  import('bootstrap/dist/js/bootstrap.min.js');
  if($('.nav-link')) {
    let href = $('.breadcrumb-item:nth-of-type(2) a').attr('href') || location.pathname;
    $(`.nav-link[href='${href}']`).parent().addClass('active');
  }
  if ($('.badge')) {
    $('.badge').each(function () {
        $(this).addClass('badge-' + ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'][Math.ceil((Math.random() * 6))]);
    });
  }
  }, []);
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <Scripts />
    </>
  );
}

export default memo(MyApp);
