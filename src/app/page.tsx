import React from 'react';
import styles from './page.module.css'
import {AiOutlineArrowDown} from 'react-icons/ai';
import { Feature, Buttons } from './feat';

export default function home() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.logo}>
          <svg width= "100%" height= "auto" viewBox="0 0 370 124.00308063592206" ><defs id="SvgjsDefs1771"></defs><g id="SvgjsG1772" transform="matrix(1.511624406912425,0,0,1.511624406912425,-25.58122322881599,-13.604619662211825)" fill="#fce38a"><path xmlns="http://www.w3.org/2000/svg" d="M50.004,91.033l-0.253-0.065c-0.482-0.127-11.929-3.229-21.259-14.696l-0.629-0.773l55.214-45.191v9.768  c0,41.83-32.492,50.807-32.82,50.893L50.004,91.033z M30.682,75.775c8.048,9.451,17.644,12.676,19.321,13.184  c2.976-0.914,31.074-10.58,31.074-48.884v-5.546L30.682,75.775z M26.451,73.6l-0.612-0.918c-1.408-2.112-2.669-4.38-3.748-6.739  l-0.32-0.701l57.46-47.021l0.621,0.436c1.848,1.297,2.854,2.202,2.896,2.24l0.329,0.298v6.062L26.451,73.6z M24.236,65.808  c0.798,1.674,1.692,3.295,2.666,4.838l54.175-44.337v-4.211c-0.339-0.284-0.934-0.764-1.759-1.364L24.236,65.808z M20.84,62.952  l-0.475-1.341c-0.898-2.538-1.629-5.229-2.172-8.001l-0.115-0.587l49.74-40.713l0.544,0.212c2.6,1.016,5.134,2.232,7.531,3.616  l1.253,0.724L20.84,62.952z M20.273,53.811c0.41,1.982,0.919,3.919,1.519,5.778l51.832-42.427c-1.758-0.951-3.583-1.809-5.447-2.561  L20.273,53.811z M17.624,50.34l-0.21-1.818c-0.331-2.857-0.491-5.621-0.491-8.447V21.192l0.331-0.298  C17.793,20.409,30.689,9,50.004,9c4.46,0,8.958,0.626,13.37,1.861l1.853,0.519L17.624,50.34z M18.923,22.1v17.975  c0,2.14,0.095,4.243,0.289,6.382l41.735-34.159C57.32,11.437,53.648,11,50.004,11C33.136,11,21.043,20.345,18.923,22.1z"></path></g><g id="SvgjsG1773" transform="matrix(1.0634740980381097,0,0,1.0634740980381097,116.93783291983941,19.239374727664888)" fill="#ffffff"><path d="M23.456 14.744 c1.8287 1.8296 2.743 4.034 2.743 6.6172 c0 2.5551 -0.91432 4.7608 -2.743 6.6164 c-1.8287 1.8025 -4.0212 2.7038 -6.576 2.7038 l-9.3603 0 l0 9.3166 l-4.64 0 l0 -13.999 l14 0 c1.264 0 2.3532 -0.45628 3.2676 -1.3715 c0.91432 -0.91348 1.3715 -2.0026 1.3715 -3.2676 c0 -1.2902 -0.4572 -2.3934 -1.3715 -3.3077 s-2.0035 -1.3715 -3.2676 -1.3715 l-9.3603 0 l-4.64 -4.68 l14 0 c2.5551 0 4.7468 0.91524 6.576 2.744 z M22.843 27.354 c1.6678 -1.6915 2.4826 -3.6557 2.4818 -5.994 c0 -2.3619 -0.81384 -4.3244 -2.487 -5.9984 c-1.674 -1.674 -3.6233 -2.4878 -5.958 -2.4878 l-11.902 0 l2.9074 2.9327 l8.9958 0 c1.4983 0 2.8051 0.54724 3.8856 1.6276 c1.0796 1.0796 1.6276 2.4004 1.6276 3.9258 c0 1.4991 -0.54808 2.8069 -1.6285 3.8864 c-1.0787 1.0796 -2.3864 1.6276 -3.8856 1.6276 l-13.126 0 l0 12.251 l2.8917 0 l0 -9.3192 l10.234 0 c2.3375 0 4.2884 -0.8016 5.9636 -2.452 z M36.269999999999996 12 l9.3404 18.681 l-5.2248 -0.00085936 l-4.1156 -8.23 l-4.1024 8.23 l-4.6932 9.32 l-5.2046 0 z M37.052 22.058 l3.8742 7.7468 l3.2702 0.00085936 l-7.926 -15.852 l-12.586 25.172 l3.2518 0 l4.4512 -8.8392 l4.0996 -8.2276 l0.78148 -1.5674 z M47.95 35.3612 l2.3191 4.638 l-5.2046 0 l-2.3191 -4.638 l5.2046 0 z M44.16 36.2355 l1.445 2.8899 l3.2501 0 l-1.445 -2.8899 l-3.2501 0 z M67.24000000000001 26.082 c1.6137 1.5866 2.4196 3.5098 2.4205 5.7684 c0 2.2334 -0.80684 4.1556 -2.4205 5.77 c-1.5883 1.5875 -3.5106 2.3803 -5.77 2.3803 l0 -4.6802 c0.4834 0 0.94144 -0.087424 1.3715 -0.26312 c0.43008 -0.17394 0.80684 -0.41608 1.1294 -0.72556 c0.32344 -0.30945 0.57084 -0.68008 0.74652 -1.1102 c0.17394 -0.43008 0.26223 -0.88728 0.26223 -1.3715 c0 -0.9406 -0.34965 -1.7606 -1.049 -2.4608 c-0.67224 -0.69928 -1.4922 -1.049 -2.4608 -1.049 l-6.9792 0 c-2.2596 0 -4.1836 -0.79372 -5.7692 -2.3803 c-1.5883 -1.5866 -2.3812 -3.5228 -2.3812 -5.8096 c0 -2.2326 0.79372 -4.1416 2.3812 -5.7292 c1.5604 -1.6137 3.4835 -2.4214 5.7692 -2.4214 l0 4.681 c-0.4834 0 -0.94144 0.086524 -1.3715 0.26223 s-0.80684 0.42396 -1.1294 0.74652 c-0.32254 0.32254 -0.57168 0.70016 -0.74652 1.1302 s-0.26226 0.87416 -0.26226 1.3304 c0 0.96856 0.33566 1.8025 1.0088 2.5018 c0.67132 0.69928 1.5053 1.0481 2.5009 1.0481 l6.9792 0 c2.2596 0 4.1828 0.7946 5.7704 2.3812 z M66.622 37.0022 c1.4563 -1.4572 2.1634 -3.1426 2.1642 -5.1524 c0 -2.0341 -0.70628 -3.7169 -2.1591 -5.146 c-1.4354 -1.4354 -3.1207 -2.1303 -5.1564 -2.1303 l-6.9792 0 c-1.2378 0 -2.2911 -0.44232 -3.1312 -1.3164 c-0.83132 -0.86368 -1.2526 -1.9091 -1.2526 -3.1076 c0 -0.56908 0.10926 -1.1276 0.32606 -1.66 c0.21856 -0.53672 0.535 -1.0149 0.93888 -1.4188 c0.40296 -0.40388 0.88024 -0.7194 1.4178 -0.93796 c0.2666 -0.1084 0.5428 -0.19058 0.82692 -0.24476 l0 -2.9695 c-1.667 0.1757 -3.0691 0.87068 -4.2668 2.1093 c-1.4406 1.4406 -2.1356 3.112 -2.1356 5.1216 c0 2.0647 0.6958 3.7623 2.125 5.1916 s3.1137 2.1242 5.1512 2.1242 l6.9792 0 c1.2098 0 2.25 0.4432 3.091 1.3174 c0.85492 0.8558 1.2938 1.8916 1.2938 3.0674 c0 0.5944 -0.11016 1.1661 -0.32606 1.7002 c-0.22465 0.54808 -0.54456 1.0227 -0.95368 1.4135 c-0.40212 0.38461 -0.87504 0.68884 -1.4056 0.90388 c-0.26574 0.1084 -0.54196 0.19058 -0.82604 0.24476 l0 2.9686 c1.6522 -0.17394 3.0578 -0.85924 4.278 -2.0787 z M90.67 26.082 c1.6137 1.5866 2.4196 3.5098 2.4205 5.7684 c0 2.2334 -0.80684 4.1556 -2.4205 5.77 c-1.5883 1.5875 -3.5106 2.3803 -5.77 2.3803 l0 -4.6802 c0.4834 0 0.94144 -0.087424 1.3715 -0.26312 c0.43008 -0.17394 0.80684 -0.41608 1.1294 -0.72556 c0.32344 -0.30945 0.57084 -0.68008 0.74652 -1.1102 c0.17394 -0.43008 0.26223 -0.88728 0.26223 -1.3715 c0 -0.9406 -0.34965 -1.7606 -1.049 -2.4608 c-0.67224 -0.69928 -1.4922 -1.049 -2.4608 -1.049 l-6.9792 0 c-2.2596 0 -4.1836 -0.79372 -5.7692 -2.3803 c-1.5883 -1.5866 -2.3812 -3.5228 -2.3812 -5.8096 c0 -2.2326 0.79372 -4.1416 2.3812 -5.7292 c1.5604 -1.6137 3.4835 -2.4214 5.7692 -2.4214 l0 4.681 c-0.4834 0 -0.94144 0.086524 -1.3715 0.26223 s-0.80684 0.42396 -1.1294 0.74652 c-0.32254 0.32254 -0.57168 0.70016 -0.74652 1.1302 s-0.26226 0.87416 -0.26226 1.3304 c0 0.96856 0.33566 1.8025 1.0088 2.5018 c0.67132 0.69928 1.5053 1.0481 2.5009 1.0481 l6.9792 0 c2.2596 0 4.1828 0.7946 5.7704 2.3812 z M90.05199999999999 37.0022 c1.4563 -1.4572 2.1634 -3.1426 2.1642 -5.1524 c0 -2.0341 -0.70628 -3.7169 -2.1591 -5.146 c-1.4354 -1.4354 -3.1207 -2.1303 -5.1564 -2.1303 l-6.9792 0 c-1.2378 0 -2.2911 -0.44232 -3.1312 -1.3164 c-0.83132 -0.86368 -1.2526 -1.9091 -1.2526 -3.1076 c0 -0.56908 0.10926 -1.1276 0.32606 -1.66 c0.21856 -0.53672 0.535 -1.0149 0.93888 -1.4188 c0.40296 -0.40388 0.88024 -0.7194 1.4178 -0.93796 c0.2666 -0.1084 0.5428 -0.19058 0.82692 -0.24476 l0 -2.9695 c-1.667 0.1757 -3.0691 0.87068 -4.2668 2.1093 c-1.4406 1.4406 -2.1356 3.112 -2.1356 5.1216 c0 2.0647 0.6958 3.7623 2.125 5.1916 s3.1137 2.1242 5.1512 2.1242 l6.9792 0 c1.2098 0 2.25 0.4432 3.091 1.3174 c0.85492 0.8558 1.2938 1.8916 1.2938 3.0674 c0 0.5944 -0.11016 1.1661 -0.32606 1.7002 c-0.22465 0.54808 -0.54456 1.0227 -0.95368 1.4135 c-0.40212 0.38461 -0.87504 0.68884 -1.4056 0.90388 c-0.26574 0.1084 -0.54196 0.19058 -0.82604 0.24476 l0 2.9686 c1.6522 -0.17394 3.0578 -0.85924 4.278 -2.0787 z M89.19999999999999 12 l5.2046 0 l8.8348 17.551 l-2.6128 5.238 z M100.624 32.8344 l1.6382 -3.2824 l-8.396 -16.678 l-3.2501 0 z M129.584 12 l5.2046 0 l-14 28 l-8.7956 -17.55 l2.6128 -5.2372 l6.1828 12.338 z M120.78899999999999 38.0468 l12.587 -25.173 l-3.2509 0 l-8.5536 17.068 l-0.78148 1.5594 l-0.78148 -1.5594 l-5.3996 -10.775 l-1.6364 3.2807 z M156.06400000000002 18.806 c1.9904 1.9913 2.9991 4.4116 2.9982 7.1932 c0 2.7807 -1.007 5.2136 -2.994 7.23 c-2 1.9703 -4.4188 2.9642 -7.1996 2.9642 c-2.778 0 -5.2088 -0.99216 -7.2256 -2.9502 c-1.9756 -2.035 -2.9686 -4.466 -2.9686 -7.244 c0 -2.7798 0.99392 -5.1984 2.9546 -7.1888 c2.0254 -1.9965 4.458 -3.0044 7.2396 -3.0044 c2.7841 0 5.2048 1.0096 7.1952 3.0001 z M155.446 32.6164 c1.8287 -1.8558 2.7431 -4.0604 2.7431 -6.6164 c0 -2.5542 -0.91432 -4.7456 -2.743 -6.5752 s-4.0212 -2.7439 -6.576 -2.7439 s-4.7608 0.91432 -6.6164 2.7439 c-1.8025 1.8287 -2.7038 4.02 -2.7038 6.5752 s0.90124 4.7608 2.7038 6.6164 c1.8558 1.8025 4.0604 2.7038 6.6164 2.7038 c2.5542 0 4.7468 -0.90124 6.576 -2.7038 z M158.75400000000002 16.115 c2.7702 2.744 4.1556 6.0396 4.1564 9.8848 c0 3.9004 -1.3855 7.196 -4.1556 9.8848 c-2.7177 2.744 -6.0116 4.1156 -9.8848 4.1156 s-7.1688 -1.3724 -9.8848 -4.1156 c-2.744 -2.7168 -4.1156 -6.0116 -4.1156 -9.8848 c0 -3.8462 1.3715 -7.1408 4.1156 -9.8848 c2.6897 -2.744 5.9844 -4.1156 9.8848 -4.1156 c3.8724 0 7.1672 1.3724 9.884 4.1156 z M158.13400000000001 35.2692 c2.6294 -2.5534 3.9022 -5.5812 3.903 -9.2692 c0 -3.6364 -1.2745 -6.6664 -3.8969 -9.2632 c-2.5761 -2.6014 -5.606 -3.8628 -9.2692 -3.8628 c-3.6906 0 -6.7196 1.2605 -9.2608 3.8532 c-2.6032 2.6032 -3.8655 5.6348 -3.8655 9.2728 c0 3.6644 1.2614 6.694 3.8567 9.2632 c2.5752 2.6006 5.6052 3.862 9.2696 3.862 c3.6626 0 6.6932 -1.2614 9.2632 -3.8559 z M182.97400000000002 26.605 c-1.076 1.5604 -2.4475 2.6765 -4.1136 3.3488 l5.7692 10.046 l-5.3664 0 l-8.1312 -14.018 l4.1776 0.018359 c1.264 0 2.3532 -0.4572 3.2684 -1.3715 c0.91348 -0.91432 1.3715 -2.0175 1.3715 -3.3086 c0 -1.264 -0.4572 -2.3541 -1.3715 -3.2684 c-0.91524 -0.91432 -2.0044 -1.3715 -3.2684 -1.3715 l-9.5736 0 l-2.7151 -4.68 l12.288 0 c2.5551 0 4.7468 0.91524 6.5752 2.744 c1.8296 1.8296 2.7439 4.0212 2.7439 6.576 c0 1.9362 -0.5516 3.6985 -1.6539 5.2852 z M183.11800000000002 39.1262 l-5.0176 -8.738 l-0.5 -0.87068 l0.93096 -0.375 c1.4974 -0.60316 2.7501 -1.6242 3.7221 -3.0342 c1.0105 -1.4528 1.5 -3.0184 1.5 -4.7884 c0 -2.3348 -0.81384 -4.284 -2.4878 -5.958 s-3.6233 -2.4878 -5.958 -2.4878 l-10.77 0 l1.702 2.9319 l9.0701 0 c1.4974 0 2.8052 0.54808 3.8856 1.6276 c1.0804 1.0813 1.6276 2.3891 1.6276 3.8865 c0 1.5254 -0.54724 2.8462 -1.6276 3.9266 c-1.0804 1.0796 -2.3882 1.6276 -3.8864 1.6276 l-2.6565 -0.011367 l7.1136 12.263 l3.3523 0 z M208.94000000000003 20.594 c0.73952 1.695 1.1092 3.4965 1.1092 5.4048 c0 1.9109 -0.36976 3.7124 -1.1093 5.4064 c-0.73952 1.695 -1.7422 3.1819 -3.0053 4.4588 c-1.2658 1.278 -2.7509 2.2859 -4.4588 3.0254 c-1.7081 0.7404 -3.5167 1.1102 -5.426 1.1102 l-9.3201 0 l4.64 -4.68 l4.6802 0 c1.2902 0 2.5009 -0.24215 3.6303 -0.7264 s2.118 -1.1565 2.966 -2.0175 c0.84704 -0.86016 1.5123 -1.8558 1.9965 -2.9852 c0.48424 -1.1303 0.7264 -2.3261 0.7264 -3.591 c0 -1.2631 -0.24215 -2.4607 -0.7264 -3.5901 s-1.1574 -2.125 -2.0175 -2.9852 c-0.861 -0.861 -1.8558 -1.5332 -2.9852 -2.0175 c-1.1294 -0.48516 -2.327 -0.7264 -3.5901 -0.7264 l-4.6802 0 l-4.64 -4.68 l9.3201 0 c1.9091 0 3.7116 0.37062 5.4056 1.1092 c1.695 0.7404 3.1801 1.7491 4.458 3.0262 c1.2771 1.278 2.2859 2.7641 3.0262 4.458 z M208.14000000000001 31.0564 c0.68708 -1.5752 1.0358 -3.2762 1.0358 -5.056 s-0.34879 -3.4817 -1.0358 -5.0568 c-0.69232 -1.5848 -1.6486 -2.9939 -2.8436 -4.1896 c-1.1958 -1.1941 -2.6049 -2.1504 -4.1896 -2.8427 c-1.5761 -0.68796 -3.278 -1.0368 -5.056 -1.0368 l-7.223 0 l2.9065 2.9319 l4.3165 0 c1.3794 0 2.7028 0.26836 3.9354 0.79724 c1.2247 0.52448 2.3209 1.2658 3.2579 2.202 c0.9362 0.9362 1.6766 2.0332 2.2028 3.2596 c0.52888 1.2343 0.79724 2.5577 0.79724 3.9345 s-0.26836 2.7002 -0.79724 3.9354 c-0.52536 1.2247 -1.2579 2.32 -2.1775 3.2544 c-0.92224 0.93708 -2.014 1.6801 -3.244 2.2072 c-1.2343 0.52888 -2.5717 0.79724 -3.9747 0.79724 l-4.3165 0 l-2.9065 2.9319 l7.223 0 c1.7798 0 3.4887 -0.34879 5.078 -1.0376 c1.5971 -0.69144 3.0053 -1.646 4.1856 -2.8384 c1.181 -1.1941 2.132 -2.6049 2.8261 -4.1932 z M232.02700000000002 11.998999999999999 l5.931 0 l-21.867 28 l-5.9712 0 l10.974 -14 l-10.974 -14 l5.9712 0 l7.9468 10.208 z M215.6648 39.12456 l20.501 -26.251 l-3.7134 0 l-7.7248 9.8716 l-0.6906 0.882 l-0.68796 -0.88376 l-7.6856 -9.87 l-3.7483 0 l9.8656 12.586 l0.42308 0.53932 l-0.42308 0.53932 l-9.8656 12.587 l3.7492 0 z"></path></g><g id="SvgjsG1774" transform="matrix(0.673719323159626,0,0,0.673719323159626,118.8546772791304,78.0722170398889)" fill="#ffffff"><path d="M15.61 6 c0.18 0 0.3 0.12 0.3 0.3 l0 13.4 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -10.15 l-4.29 10.22 c-0.06 0.16 -0.18 0.23 -0.34 0.23 l-1.24 0 c-0.16 0 -0.28 -0.07 -0.34 -0.23 l-4.26 -10.15 l0 10.08 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.59 0 c0.16 0 0.3 0.06 0.36 0.2 l4.85 11.69 l4.83 -11.69 c0.06 -0.14 0.2 -0.2 0.36 -0.2 l1.62 0 z M31.4105 19.66 c0.08 0.2 -0.02 0.34 -0.24 0.34 l-1.29 0 c-0.16 0 -0.27 -0.06 -0.34 -0.24 l-0.99 -2.69 l-6.42 0 l-0.99 2.69 c-0.07 0.18 -0.18 0.24 -0.34 0.24 l-1.29 0 c-0.22 0 -0.32 -0.14 -0.24 -0.34 l5.08 -13.42 c0.06 -0.16 0.2 -0.24 0.36 -0.24 l1.26 0 c0.16 0 0.3 0.08 0.36 0.24 z M22.7405 15.42 l5.2 0 l-2.6 -7.08 z M44.641 19.64 c0.14 0.2 0.06 0.36 -0.18 0.36 l-1.53 0 c-0.16 0 -0.26 -0.04 -0.36 -0.18 l-4.63 -6.3 l-1.55 1.74 l0 4.44 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 c0.18 0 0.3 0.12 0.3 0.3 l0 6.47 l5.82 -6.61 c0.1 -0.12 0.22 -0.16 0.36 -0.16 l1.6 0 c0.26 0 0.34 0.18 0.16 0.36 l-5.18 5.81 z M57.3915 7.699999999999999 l-3.74 0 l0 10.6 l3.74 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-9.35 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -1.1 c0 -0.18 0.12 -0.3 0.3 -0.3 l3.74 0 l0 -10.6 l-3.74 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -1.1 c0 -0.18 0.12 -0.3 0.3 -0.3 l9.35 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 z M71.982 6 c0.18 0 0.3 0.12 0.3 0.3 l0 13.4 c0 0.16 -0.1 0.28 -0.25 0.3 l-1.64 0 c-0.16 0 -0.28 -0.06 -0.36 -0.2 l-6.44 -11.04 l0 10.94 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.17 0.1 -0.28 0.26 -0.3 l1.63 0 c0.16 0 0.28 0.06 0.36 0.2 l6.44 11.03 l0 -10.93 c0 -0.18 0.12 -0.3 0.3 -0.3 l1.27 0 z M89.3725 12.620000000000001 c0.18 0 0.3 0.12 0.3 0.3 l0 0.79 c0 3.69 -2.42 6.55 -6.4 6.55 c-4.03 0 -7.11 -3.22 -7.11 -7.23 c0 -4 3.1 -7.19 7.08 -7.19 c1.92 0 3.49 0.73 4.77 1.91 c0.14 0.13 0.15 0.28 0.01 0.42 l-0.8 0.85 c-0.14 0.14 -0.28 0.12 -0.42 0 c-0.99 -0.84 -2.11 -1.36 -3.56 -1.36 c-2.87 0 -5.17 2.31 -5.17 5.37 c0 3.07 2.25 5.4 5.2 5.4 c2.68 0 4.52 -1.73 4.6 -4.14 l-4.41 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -1.07 c0 -0.18 0.12 -0.3 0.3 -0.3 l5.91 0 z M107.49349999999998 6 c3.69 0 5.04 1.56 5.04 4.39 c0 2.84 -1.35 4.4 -5.04 4.4 l-3.39 0 l0 4.91 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l4.96 0 z M107.62349999999999 13.09 c1.86 0 3.1 -0.5 3.1 -2.7 c0 -2.19 -1.24 -2.69 -3.1 -2.69 l-3.52 0 l0 5.39 l3.52 0 z M127.28399999999999 19.66 c0.08 0.2 -0.02 0.34 -0.24 0.34 l-1.29 0 c-0.16 0 -0.27 -0.06 -0.34 -0.24 l-0.99 -2.69 l-6.42 0 l-0.99 2.69 c-0.07 0.18 -0.18 0.24 -0.34 0.24 l-1.29 0 c-0.22 0 -0.32 -0.14 -0.24 -0.34 l5.08 -13.42 c0.06 -0.16 0.2 -0.24 0.36 -0.24 l1.26 0 c0.16 0 0.3 0.08 0.36 0.24 z M118.61399999999999 15.42 l5.2 0 l-2.6 -7.08 z M135.0445 12.01 c2.72 0.56 5.21 1.37 5.21 4.33 c0 2.4 -1.61 3.96 -5.15 3.96 c-3.03 0 -4.85 -1.12 -5.06 -3.42 c-0.02 -0.2 0.1 -0.36 0.28 -0.36 l1.22 0 c0.18 0 0.28 0.14 0.3 0.3 c0.17 1.1 1.33 1.78 3.26 1.78 c2.13 0 3.31 -0.72 3.31 -2.24 c0 -1.77 -1.23 -2.15 -3.37 -2.65 c-2.54 -0.58 -4.68 -1.45 -4.68 -4.16 c0 -2.26 1.53 -3.72 4.62 -3.72 c2.86 0 4.62 1.09 4.85 3.35 c0.02 0.2 -0.1 0.3 -0.28 0.3 l-1.13 0 c-0.18 0 -0.28 -0.08 -0.3 -0.24 c-0.15 -1.02 -1.26 -1.74 -3.13 -1.74 c-1.72 0 -2.83 0.7 -2.83 2.05 c0 1.36 0.91 2.05 2.88 2.46 z M148.335 12.01 c2.72 0.56 5.21 1.37 5.21 4.33 c0 2.4 -1.61 3.96 -5.15 3.96 c-3.03 0 -4.85 -1.12 -5.06 -3.42 c-0.02 -0.2 0.1 -0.36 0.28 -0.36 l1.22 0 c0.18 0 0.28 0.14 0.3 0.3 c0.17 1.1 1.33 1.78 3.26 1.78 c2.13 0 3.31 -0.72 3.31 -2.24 c0 -1.77 -1.23 -2.15 -3.37 -2.65 c-2.54 -0.58 -4.68 -1.45 -4.68 -4.16 c0 -2.26 1.53 -3.72 4.62 -3.72 c2.86 0 4.62 1.09 4.85 3.35 c0.02 0.2 -0.1 0.3 -0.28 0.3 l-1.13 0 c-0.18 0 -0.28 -0.08 -0.3 -0.24 c-0.15 -1.02 -1.26 -1.74 -3.13 -1.74 c-1.72 0 -2.83 0.7 -2.83 2.05 c0 1.36 0.91 2.05 2.88 2.46 z M174.19550000000004 6 c0.22 0 0.29 0.14 0.24 0.34 l-3.57 13.42 c-0.04 0.16 -0.2 0.24 -0.36 0.24 l-1.53 0 c-0.16 0 -0.31 -0.08 -0.36 -0.24 l-3.17 -10.57 l-3.17 10.57 c-0.05 0.16 -0.19 0.24 -0.35 0.24 l-1.54 0 c-0.16 0 -0.32 -0.08 -0.36 -0.24 l-3.53 -13.42 c-0.06 -0.21 0.02 -0.34 0.24 -0.34 l1.29 0 c0.16 0 0.3 0.06 0.34 0.24 l2.83 11.41 l3.32 -11.41 c0.03 -0.11 0.09 -0.17 0.16 -0.21 c0.04 -0.02 0.1 -0.03 0.16 -0.03 l1.23 0 c0.06 0 0.12 0.01 0.16 0.03 c0.07 0.04 0.13 0.1 0.16 0.21 l3.32 11.41 l2.86 -11.41 c0.05 -0.18 0.18 -0.24 0.34 -0.24 l1.29 0 z M184.75600000000003 20.26 c-3.96 0 -7.17 -3.2 -7.17 -7.2 c0 -4.02 3.21 -7.22 7.17 -7.22 c3.95 0 7.16 3.2 7.16 7.22 c0 4 -3.21 7.2 -7.16 7.2 z M184.75600000000003 18.49 c2.97 0 5.32 -2.4 5.32 -5.43 c0 -3.05 -2.35 -5.45 -5.32 -5.45 c-2.98 0 -5.33 2.4 -5.33 5.45 c0 3.03 2.35 5.43 5.33 5.43 z M203.1365 14.57 l2.68 5.08 c0.11 0.21 0.01 0.35 -0.22 0.35 l-1.32 0 c-0.16 0 -0.27 -0.07 -0.35 -0.22 l-2.58 -4.99 l-0.29 0 l-3.39 0 l0 4.91 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l4.96 0 c3.69 0 5.04 1.56 5.04 4.39 c0 2.22 -0.83 3.66 -2.96 4.18 z M197.6665 7.699999999999999 l0 5.39 l3.52 0 c1.86 0 3.1 -0.5 3.1 -2.7 c0 -2.19 -1.24 -2.69 -3.1 -2.69 l-3.52 0 z M213.32700000000003 6 c4.85 0 7.33 3.05 7.33 7 c0 3.94 -2.48 7 -7.33 7 l-3.35 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l3.35 0 z M213.32700000000003 18.3 c3.63 0 5.43 -2.01 5.43 -5.3 c0 -3.3 -1.8 -5.3 -5.43 -5.3 l-1.78 0 l0 10.6 l1.78 0 z M228.58750000000003 12.01 c2.72 0.56 5.21 1.37 5.21 4.33 c0 2.4 -1.61 3.96 -5.15 3.96 c-3.03 0 -4.85 -1.12 -5.06 -3.42 c-0.02 -0.2 0.1 -0.36 0.28 -0.36 l1.22 0 c0.18 0 0.28 0.14 0.3 0.3 c0.17 1.1 1.33 1.78 3.26 1.78 c2.13 0 3.31 -0.72 3.31 -2.24 c0 -1.77 -1.23 -2.15 -3.37 -2.65 c-2.54 -0.58 -4.68 -1.45 -4.68 -4.16 c0 -2.26 1.53 -3.72 4.62 -3.72 c2.86 0 4.62 1.09 4.85 3.35 c0.02 0.2 -0.1 0.3 -0.28 0.3 l-1.13 0 c-0.18 0 -0.28 -0.08 -0.3 -0.24 c-0.15 -1.02 -1.26 -1.74 -3.13 -1.74 c-1.72 0 -2.83 0.7 -2.83 2.05 c0 1.36 0.91 2.05 2.88 2.46 z M255.00850000000005 18.3 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-8.55 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -13.4 c0 -0.18 0.12 -0.3 0.3 -0.3 l8.53 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.96 0 l0 4.15 l6.43 0 c0.18 0 0.3 0.12 0.3 0.3 l0 1.1 c0 0.18 -0.12 0.3 -0.3 0.3 l-6.43 0 l0 4.75 l6.98 0 z M270.45900000000006 19.66 c0.08 0.2 -0.02 0.34 -0.24 0.34 l-1.29 0 c-0.16 0 -0.27 -0.06 -0.34 -0.24 l-0.99 -2.69 l-6.42 0 l-0.99 2.69 c-0.07 0.18 -0.18 0.24 -0.34 0.24 l-1.29 0 c-0.22 0 -0.32 -0.14 -0.24 -0.34 l5.08 -13.42 c0.06 -0.16 0.2 -0.24 0.36 -0.24 l1.26 0 c0.16 0 0.3 0.08 0.36 0.24 z M261.78900000000004 15.42 l5.2 0 l-2.6 -7.08 z M278.21950000000004 12.01 c2.72 0.56 5.21 1.37 5.21 4.33 c0 2.4 -1.61 3.96 -5.15 3.96 c-3.03 0 -4.85 -1.12 -5.06 -3.42 c-0.02 -0.2 0.1 -0.36 0.28 -0.36 l1.22 0 c0.18 0 0.28 0.14 0.3 0.3 c0.17 1.1 1.33 1.78 3.26 1.78 c2.13 0 3.31 -0.72 3.31 -2.24 c0 -1.77 -1.23 -2.15 -3.37 -2.65 c-2.54 -0.58 -4.68 -1.45 -4.68 -4.16 c0 -2.26 1.53 -3.72 4.62 -3.72 c2.86 0 4.62 1.09 4.85 3.35 c0.02 0.2 -0.1 0.3 -0.28 0.3 l-1.13 0 c-0.18 0 -0.28 -0.08 -0.3 -0.24 c-0.15 -1.02 -1.26 -1.74 -3.13 -1.74 c-1.72 0 -2.83 0.7 -2.83 2.05 c0 1.36 0.91 2.05 2.88 2.46 z M298.3 6 c0.24 0 0.33 0.15 0.2 0.36 l-5.25 8.21 l0 5.13 c0 0.18 -0.12 0.3 -0.3 0.3 l-1.27 0 c-0.18 0 -0.3 -0.12 -0.3 -0.3 l0 -5.13 l-5.26 -8.21 c-0.13 -0.21 -0.04 -0.36 0.2 -0.36 l1.47 0 c0.16 0 0.27 0.06 0.36 0.2 l4.16 6.51 l4.16 -6.51 c0.09 -0.14 0.2 -0.2 0.36 -0.2 l1.47 0 z"></path></g></svg>
        </div>
        <Buttons/>
        <div className={styles.knowMore}>
          <p>Know more</p>
          <AiOutlineArrowDown/>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.txt}>
        <p className={styles.master}>Master Your<br/>Passwords</p>
        <p className={styles.quote}>Tired of forgetting your passwords or useful awful stiky notes? Secure Password Manager has got you fully covered! Manage all your passwords in one insanely secure and easy-to-use platform, completely free!</p>
        </div>

        <div className={styles.features}>
          <Feature head='Local Storage' desc='Full control, complete safety' cl='a'/>
          <Feature head='2FA🔒' desc='Double the security' cl='b'/>
          <Feature head='Quick Access' desc='Save time, Stay organised' cl='c'/>
        </div>
      </div>
    </main>
  )
}