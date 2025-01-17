import dynamic from 'next/dynamic';

const DynamicMapFormComponent = dynamic(() => import('./MapFormComponent'), {
  ssr: false,
});
export default DynamicMapFormComponent;
