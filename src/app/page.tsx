import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="relative flex h-[70vh] flex-col items-center justify-center gap-4 rounded-b-[118px] border-x border-b border-primary px-16 text-center lg:h-svh">
        <svg
          width="418"
          height="47"
          viewBox="0 0 418 47"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-50 fill-foreground md:scale-75 lg:scale-100"
        >
          <path d="M43.9771 0L0 0.053576L0.0130031 10.6666L43.9901 10.613L43.9771 0Z" />
          <path d="M43.982 18.1666L0.00497261 18.2202L0.0179758 28.8334L43.995 28.7798L43.982 18.1666Z" />
          <path d="M43.987 36.3333L0.00994521 36.3869L0.0229484 47L44 46.9464L43.987 36.3333Z" />
          <path d="M117 47H102.529L90.6884 29.5394L79.1079 47H65L82.3102 23.0327L65.7617 0H80.2331L91.1904 16.3358L102.044 0H116.256L99.4994 23.0327L117 47Z" />
          <path d="M161.484 47C148.553 47 138.017 36.4825 138 23.5432C138 17.2639 140.413 11.3651 144.839 6.9194C149.265 2.47369 155.166 0.0172985 161.449 0L181.965 0.0518406V10.6558L161.449 10.6212C158.03 10.6212 154.819 11.9705 152.406 14.3923C149.976 16.8313 148.657 20.0662 148.657 23.5086C148.657 30.601 154.42 36.3614 161.484 36.3614H181.965L182 46.9481L161.519 46.9827H161.484V47Z" />
          <path d="M212.2 11.0232C212.2 10.7982 212.006 10.6251 211.795 10.6251H203L203.018 0H211.813C217.987 0 223 4.94919 223 11.0232V47H212.2V11.0232Z" />
          <path d="M274.452 10.6212H285V0H274.452V10.6212ZM258.82 0H244V10.6212H258.82C259.044 10.6212 259.217 10.8116 259.217 11.0191V47H269.835V11.0363C269.835 4.96457 264.889 0.0172098 258.802 0.0172098" />
          <path d="M349.977 0L306 0.0535758L306.013 10.6666L349.99 10.613L349.977 0Z" />
          <path d="M349.982 18.1666L306.005 18.2202L306.018 28.8333L349.995 28.7797L349.982 18.1666Z" />
          <path d="M349.987 36.3333L306.01 36.3869L306.023 47L350 46.9464L349.987 36.3333Z" />
          <path d="M411.095 6.88223C406.665 2.47274 400.782 0.0345125 394.483 0.0345125L371 0V10.6173L394.5 10.6519C397.926 10.6519 401.162 11.9834 403.585 14.4043C406.025 16.8252 407.357 20.0588 407.375 23.4999C407.375 30.5897 401.63 36.3653 394.535 36.3826H391.575H387.163H371.017V47H387.163H394.552C407.496 46.9827 418.017 36.4344 418 23.4826C418 17.2056 415.543 11.3263 411.095 6.89954" />
        </svg>
        <p className="text-lg font-semibold text-primary">
          تجربة متجددة وتطلع دائم نحو ما يليق بوطننا
        </p>

        <button className="group absolute bottom-10 flex flex-col items-center text-foreground">
          <span lang="en" className="block">
            Company Profile
          </span>
          <span> التعريف بالشركة</span>
          <svg
            width="31"
            height="21"
            viewBox="0 0 31 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 fill-[#E9D8F6] transition-all duration-300 ease-linear group-hover:translate-y-4 group-hover:scale-110 group-hover:fill-primary"
          >
            <path d="M15.3202 20.03L10.4802 13.31L0.910156 0H9.2702L15.6102 9.45001L21.8802 0H30.0902L20.4102 13.31L15.3202 20.03Z" />
          </svg>
        </button>
      </section>
      <section className="relative flex h-[50vh] items-center lg:h-svh lg:px-20">
        <div className="absolute left-20 top-24 hidden lg:block">
          <svg
            width="170"
            height="170"
            viewBox="0 0 223 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce ease-in-out"
          >
            <circle cx="111.5" cy="111.5" r="111.5" fill="#E9D8F6" />
          </svg>
          <svg
            width="170"
            height="400"
            viewBox="0 0 225 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.496 124.304C103.496 121.767 101.319 119.815 98.9446 119.815H0L0.198083 0H99.1427C168.602 0 225 55.81 225 124.304V530H103.496V124.304Z"
              fill="#865CA3"
            />
          </svg>
        </div>
        <article className="relative text-center md:p-20 md:text-start lg:w-[70%]">
          <div className="absolute left-0 top-0 hidden h-52 w-full rounded-tr-[118px] border-r border-t border-primary lg:block"></div>
          <h2 className="text-2xl font-bold text-primary">الخدمات:</h2>
          <p className="mt-2 px-8 text-center text-lg font-semibold md:mt-8 lg:pr-12 lg:text-right">
            نحن نقدم مجموعة شاملة من الخدمات التي تغطي جميع جوانب تنظيم
            الفعاليات، من المؤتمرات والمعارض إلى ورش العمل واللقاءات الحكومية.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
