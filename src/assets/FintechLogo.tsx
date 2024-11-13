import * as React from "react";

function FintechLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={145} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 31.4v-1.04l2-.2c.507-.053.84-.213 1-.48.16-.293.24-.827.24-1.6V5.6c0-.667-.093-1.133-.28-1.4-.16-.267-.507-.427-1.04-.48L0 3.56V2.52h19.2l1.16 7.24-1.16.28c-.453-1.333-.907-2.413-1.36-3.24-.427-.827-.907-1.453-1.44-1.88a4.22 4.22 0 00-1.76-.88c-.667-.16-1.467-.24-2.4-.24h-3.4v12.6h2.96c.853 0 1.493-.08 1.92-.24.427-.187.76-.533 1-1.04.24-.533.493-1.307.76-2.32l1.04-.12v8.92l-1.04.16c-.24-1.173-.493-2.04-.76-2.6-.24-.56-.587-.933-1.04-1.12-.453-.213-1.093-.32-1.92-.32H8.84v10.44c0 .693.08 1.2.24 1.52.187.293.613.467 1.28.52l2.68.16v1.04H0zm23.187 0v-1.04l1.92-.24c.453-.053.733-.213.84-.48.133-.267.2-.733.2-1.4V14.68c0-.907-.08-1.533-.24-1.88-.16-.347-.547-.547-1.16-.6l-1.72-.16.12-1.04 7.96-.4.36.24v17.48c0 .613.067 1.053.2 1.32.133.24.427.4.88.48l1.92.28v1h-11.28zm5.12-24.52c-1.04 0-1.866-.267-2.48-.8-.613-.56-.92-1.307-.92-2.24 0-.907.307-1.64.92-2.2.613-.587 1.44-.88 2.48-.88 1.067 0 1.894.28 2.48.84.614.56.92 1.307.92 2.24 0 .907-.306 1.64-.92 2.2-.613.56-1.44.84-2.48.84zm8.79 24.52v-1.04l1.72-.2c.427-.053.707-.2.84-.44.134-.267.2-.747.2-1.44V14.6c0-.88-.093-1.48-.28-1.8-.16-.347-.533-.547-1.12-.6l-1.72-.2.12-1 7.64-.44.32.28.04 3.88h.04c.64-1.467 1.56-2.573 2.76-3.32 1.227-.747 2.587-1.12 4.08-1.12 1.44 0 2.64.267 3.6.8s1.68 1.333 2.16 2.4c.507 1.04.76 2.32.76 3.84v11.2c0 .613.08 1.027.24 1.24.16.213.494.347 1 .4l1.6.2v1.04h-10.72v-1l1.48-.2c.48-.053.787-.2.92-.44.134-.24.2-.653.2-1.24V17.44c0-1.227-.106-2.187-.32-2.88-.186-.72-.52-1.227-1-1.52-.48-.293-1.133-.44-1.96-.44-.88 0-1.666.213-2.36.64-.693.427-1.24 1.027-1.64 1.8-.373.773-.56 1.693-.56 2.76v10.6c0 .613.054 1.04.16 1.28.134.24.4.387.8.44l1.72.28v1h-10.72zm33.504.56c-1.146 0-2.133-.2-2.96-.6-.826-.4-1.453-1.04-1.88-1.92-.426-.88-.64-2.04-.64-3.48v-13.8h-2.84v-1.04c1.12-.107 2.014-.387 2.68-.84.667-.453 1.174-1.133 1.52-2.04.347-.933.614-2.147.8-3.64l2.68-.36.44.24v6.36h5.68v1.32h-5.68v13.16c0 1.147.187 2.027.56 2.64.4.613 1.067.92 2 .92.64 0 1.267-.133 1.88-.4a5.928 5.928 0 001.72-1.16l.6.8c-.853 1.2-1.8 2.147-2.84 2.84-1.013.667-2.253 1-3.72 1zm17.898 0c-2 0-3.734-.4-5.2-1.2-1.467-.827-2.6-2.013-3.4-3.56-.774-1.573-1.16-3.467-1.16-5.68 0-2.4.44-4.427 1.32-6.08.906-1.68 2.146-2.96 3.72-3.84 1.573-.88 3.373-1.32 5.4-1.32 1.626 0 3.026.307 4.2.92 1.2.587 2.133 1.44 2.8 2.56.666 1.093 1 2.4 1 3.92 0 .453-.027.907-.08 1.36-.027.427-.08.867-.16 1.32h-12.64c-.027 1.813.2 3.32.68 4.52.48 1.173 1.173 2.053 2.08 2.64.933.56 2.013.84 3.24.84 1.146 0 2.213-.173 3.2-.52 1.013-.347 2.04-.987 3.08-1.92l.76.72c-.987 1.733-2.227 3.053-3.72 3.96-1.467.907-3.174 1.36-5.12 1.36zm-4.2-12.84h7.6c.053-.32.08-.653.08-1 .026-.347.04-.707.04-1.08 0-2-.267-3.427-.8-4.28-.507-.853-1.307-1.28-2.4-1.28-.88 0-1.64.253-2.28.76-.64.48-1.147 1.28-1.52 2.4-.374 1.12-.614 2.613-.72 4.48zM109.9 31.96c-1.946 0-3.64-.413-5.08-1.24-1.413-.827-2.52-2.013-3.32-3.56-.8-1.573-1.2-3.453-1.2-5.64 0-2.267.427-4.24 1.28-5.92.88-1.68 2.107-2.987 3.68-3.92 1.574-.933 3.427-1.4 5.56-1.4.934 0 1.774.107 2.52.32.747.213 1.4.507 1.96.88a24.213 24.213 0 01-.72-2.52c-.16-.827-.24-1.613-.24-2.36 0-.773.094-1.547.28-2.32a5.944 5.944 0 011.08-2.12c.507-.667 1.214-1.187 2.12-1.56.934-.4 2.107-.6 3.52-.6 1.067 0 2.174.08 3.32.24 1.174.133 2.374.333 3.6.6v13.4h.04a6.642 6.642 0 012.6-2.88c1.147-.72 2.48-1.08 4-1.08 1.467 0 2.68.28 3.64.84.96.56 1.68 1.36 2.16 2.4.48 1.04.72 2.307.72 3.8v11.2c0 .587.067 1 .2 1.24.16.213.494.347 1 .4l1.64.2v1.04h-10.72v-1l1.44-.2c.48-.053.787-.2.92-.44.134-.24.2-.653.2-1.24V17.44c0-1.173-.093-2.107-.28-2.8-.16-.72-.48-1.24-.96-1.56-.48-.32-1.16-.48-2.04-.48-.826 0-1.586.2-2.28.6-.693.4-1.253.987-1.68 1.76-.4.773-.6 1.72-.6 2.84v10.6c0 .613.054 1.04.16 1.28.134.24.4.387.8.44l1.72.28v1h-10.68v-1.04l1.68-.2c.427-.08.707-.24.84-.48.134-.267.2-.733.2-1.4V2.16a4.916 4.916 0 00-1.16-.28c-.4-.08-.8-.12-1.2-.12-1.226 0-2.2.213-2.92.64-.693.4-1.2.973-1.52 1.72-.293.747-.44 1.64-.44 2.68 0 1.147.174 2.293.52 3.44.374 1.12.734 2.08 1.08 2.88.267.347.467.72.6 1.12.16.4.24.813.24 1.24 0 .56-.106 1.067-.32 1.52a2.296 2.296 0 01-.92 1.04c-.426.267-.96.4-1.6.4-.826 0-1.466-.187-1.92-.56-.453-.4-.68-.92-.68-1.56 0-.4.12-.867.36-1.4.267-.56.694-1.32 1.28-2.28a4.515 4.515 0 00-1.6-.8c-.56-.187-1.2-.28-1.92-.28-.986 0-1.866.293-2.64.88-.746.587-1.333 1.52-1.76 2.8-.426 1.253-.64 2.867-.64 4.84 0 2.693.52 4.747 1.56 6.16 1.067 1.413 2.547 2.12 4.44 2.12 1.227 0 2.307-.2 3.24-.6a10.46 10.46 0 002.6-1.64l.72.76c-.96 1.653-2.133 2.92-3.52 3.8-1.386.853-3.04 1.28-4.96 1.28z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FintechLogo;
