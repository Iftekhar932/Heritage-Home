import React from "react";

const SingleProject = () => {
  return (
    <div class="w-full max-w-[384px] rounded-xl bg-gray-600 p-6">
      <div class="text-center">
        <img
          class="mx-auto w-[90px] rounded-full"
          src="./assets/images/avatar-jessica.jpeg"
          alt="user-avatar"
        />
        <h3 class="mt-6 text-2xl font-semibold text-white">Jessica Randall</h3>
        <h5 class="mt-[5px] text-sm font-semibold text-green">
          London, United Kingdom
        </h5>
        <p class="mt-[26px] text-sm font-normal text-white">
          "Front-end developer and avid reader."
        </p>
      </div>
      <div class="mt-6 flex flex-col gap-4 text-sm font-bold text-white">
        <button class="rounded-lg bg-grey py-3 hover:bg-green hover:text-dark-grey">
          GitHub
        </button>
        <button class="rounded-lg bg-grey py-3 hover:bg-green hover:text-dark-grey">
          Frontend Mentor
        </button>
        <button class="rounded-lg bg-grey py-3 hover:bg-green hover:text-dark-grey">
          LinkedIn
        </button>
        <button class="rounded-lg bg-grey py-3 hover:bg-green hover:text-dark-grey">
          Twitter
        </button>
        <button class="rounded-lg bg-grey py-3 hover:bg-green hover:text-dark-grey">
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
