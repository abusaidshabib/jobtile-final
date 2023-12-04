import {
  BiLogo99Designs,
  BiLogoAdobe,
  BiLogoAirbnb,
  BiLogoAmazon,
  BiLogoAndroid,
  BiLogoAngular,
  BiLogoApple,
  BiLogoAudible,
  BiLogoAws,
  BiLogoBaidu,
  BiLogoBehance,
  BiLogoBing,
  BiLogoBlender,
} from "react-icons/bi";

const TrustProves = () => {
  return (
    <div className="2xl:py-36 lg:py-24 md:py-16 py-8 bg-main-v9">
      <p className="md:text-5xl text-4xl text-center lg:pb-20 pb-10 font-neural text-main-v3">
        Companies trust us
      </p>
      <div className="overflow-hidden whitespace-nowrap flex gap-20 2xl:text-8xl text-6xl">
        <div className="flex w-full justify-between min-w-[2000px] gap-10 logos-slide">
          <BiLogo99Designs />
          <BiLogoAdobe />
          <BiLogoAirbnb />
          <BiLogoAmazon />
          <BiLogoAndroid />
          <BiLogoAngular />
          <BiLogoApple />
          <BiLogoAudible />
          <BiLogoAws />
          <BiLogoBaidu />
          <BiLogoBehance />
          <BiLogoBing />
          <BiLogoBlender />
        </div>
        <div className="flex w-full justify-between min-w-[2000px] gap-10 logos-slide">
          <BiLogo99Designs />
          <BiLogoAdobe />
          <BiLogoAirbnb />
          <BiLogoAmazon />
          <BiLogoAndroid />
          <BiLogoAngular />
          <BiLogoApple />
          <BiLogoAudible />
          <BiLogoAws />
          <BiLogoBaidu />
          <BiLogoBehance />
          <BiLogoBing />
          <BiLogoBlender />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-8 lg:pt-20 pt-8 2xl:px-36 lg:px-24 md:px-16 px-8 text-center">
        <div className="">
          <p className="2xl:text-6xl lg:text-5xl text-4xl font-bold text-main-v2">
            300k+
          </p>
          <p className="text-lg font-medium">companies hiring</p>
        </div>
        <div className="sm:border-x sm:border-main-v7">
          <p className="2xl:text-6xl lg:text-5xl text-4xl font-bold text-main-v2">
            600k+
          </p>
          <p className="text-lg font-medium">Hired from us</p>
        </div>
        <div className="sm:col-span-1 col-span-2">
          <p className="2xl:text-6xl lg:text-5xl text-4xl font-bold text-main-v2">
            10k+
          </p>
          <p className="text-lg font-medium">Learners</p>
        </div>
      </div>
    </div>
  );
};

export default TrustProves;
