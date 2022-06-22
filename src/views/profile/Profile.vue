<template>
  <div class="container mx-auto">
    <BaseCard noPadding class="user-profile overflow-hidden relative">
      <div class="header-cover"></div>
      <div class="flex justify-center z-10 -m-10">
        <div class="text-center">
          <img
            class="
              relative
              z-1
              w-20
              h-20
              m-auto
              rounded-full
              border-2 border-white
            "
            :src="user.photo"
            alt="profile"
            onerror="if (this.src != 'error.jpg') this.src = '/images/faces/dummy-profile.jpg';"
          />
          <p class="text-2xl">{{ user.name }}</p>
          <p class="text-gray-600">{{ user.type }}</p>
        </div>
      </div>
      <div class="mt-20 p-5">
        <!-- TABS -->
        <TabGroup>
          <TabList class="flex bg-white justify-center">
            <Tab
              v-for="category in categories"
              as="template"
              :key="category"
              v-slot="{ selected }"
            >
              <button
                class="font-semibold border-b-2 border-white"
                :class="[
                  'px-3 py-1 text-sm leading-5 ',
                  'focus:outline-none',
                  selected
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600',
                ]"
              >
                {{ category }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-10">
             <TabPanel>
              <ul class="timeline clearfix">
                  <div class="mb-1">
                      <strong class="mr-1">Activity Log</strong> 
                    </div>
                <li class="timeline-line"></li>
                <li class="timeline-item">
                  <div class="timeline-badge">
                    <div
                      class="
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-purple-500
                        text-purple-100
                        font-bold
                        h-10
                        w-10
                        mr-2
                      "
                    >
                      <i class="i-Cloud-Picture"></i>
                     
                    </div>
                  </div>
                  <BaseCard class="timeline-card">
                    <div class="mb-1">
                      <strong class="mr-1">You</strong> Deleted EBS TV news
                      
                      <p class="text-muted">3 hours ago</p>
                    </div>
                    <img
                      class="rounded mb-2 min-h-max"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div class="mb-3">
                      <a href="#" class="mr-2 hover:text-purple-500">Details</a>    
                    </div>
                    
                      
                  </BaseCard>
                </li>
                <li class="timeline-item">
                  <div class="timeline-badge">
                    <img
                      class="badge-img rounded-full"
                      :src="user.photo"
                      alt=""
                    />
                  </div>
                  <BaseCard class="timeline-card">
                    <div class="mb-1">
                      <strong class="mr-1">{{user.name}}</strong>Added a new publisher channel
                      
                      <p class="text-muted">16 hours ago</p>
                    </div>
                    <p class="my-4">
                     Added EBS TV which is an article posting channel.
                    </p>
                    <div class="mb-3">
                      <a href="#" class="mr-2 hover:text-purple-500">Details</a>
                    </div>
                  </BaseCard>
                </li>
              </ul>
              <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-group text-center">
                  <BaseBtn class="bg-primary text-white">
                    <i class="i-Calendar-4"></i> 2022
                  </BaseBtn>
                </li>
              </ul>
              <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-item">
                  <div class="timeline-badge">
                    <div
                      class="
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-red-500
                        text-red-100
                        font-bold
                        h-10
                        w-10
                        mr-2
                      "
                    >
                      <i class="i-Love-User"></i>
                    </div>
                  </div>
                  <BaseCard class="timeline-card">
                    <div class="mb-1">
                      <strong class="mr-1">New Publishers</strong>
                      <p class="text-muted">2 days ago</p>
                    </div>
                    <p class="my-4">
                      <a href="#" class="hover:text-purple-500">EBS TV</a>
                      joined Zena news network
                    </p>
                    <div class="mb-3">
                      <a href="#" class="mr-1 hover:text-purple-500">Details</a>
                    </div>
                  </BaseCard>
                </li>
                <li class="timeline-item">
                  <div class="timeline-badge">
                    <div
                      class="
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-purple-500
                        text-purple-100
                        font-bold
                        h-10
                        w-10
                        mr-2
                      "
                    >
                      <i class="i-Cloud-Picture"></i>
                    </div>
                  </div>
                  <BaseCard class="timeline-card">
                    <div div class="mb-1">
                      <strong class="mr-1">{{user.name}}</strong> added a new
                      Publisher ETV
                      <p class="text-muted">2 days ago</p>
                    </div>
                    <img
                      class="rounded mb-2"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABIFBMVEX+/v4AAAD29vYDq9oArNoDqt4ArN7q6uq+vr7y8vLu7u7///kkJCT7///4+Ph/yt4ArOTU5eYAmcKGhoYAnsra5OWbydIBrdjG6vIAndMap8Ts+/v0/v769fUArNwdq8Wzs7Nyxd8xq8zf3986OjoAmcpGRkbZ2dkAo9bQ8/lxcXG8vLynp6d5eXkxMTGOjo5PT0/MzMyamppZWVmO1OUAmNBpaWkTExOsrKwcHBzy+fNKSkoqKioREREAocj97vam4u+IxtEApOaV0eREs9Vivdd0xNRey+P8+Ofm//eg2+Da+v3z9+jz8/pFqcGi2Obi8P2ExN7B4fIAtdi05+s1l7Z/0uBHrdxitbdQscVaxNVxuMje/fnv++5frsoYoLQDEBQzAAAPVklEQVR4nO2cDUPbthaGjRMbTEB44NUEx26aEAgkARIoFAOGMaC0IWW7sO7ejXX//19cybHjryM7jh0Iwe/WFoIty4+ko6OjIxgmU6ZMmTJlypQpU6ZMcYVmp0XV2dEZtOemQo0EDOZXZqZDjYzBzFzGIGMwkzEgyhhkDIgyBhkDooxBxoAoY5AxIMoYvBIGh83mOIufdAYbK+UqftjcOJ8xwQzWt5ubAn6OwLLoDTLArb/J4kcgxGICmMGnsT1qZhIZbDdI52fY/tv3hd6YPdhELG5+r5jOWB5laQIZsEExu2N5lKXJY1DNGMzMQwxaY3mUpcljIPiNwdtjcBYwiITB9jgeZWviGOww0Fg4HMejbE0cgz2Qwf44HmVrnAzWt3c7ZXNLr9nZ3d4YrkL7IIO9xC8aojEx2OtYBSNL5Ov5djO6T7dAe+AHuLG/d7KxsW5qZ8f8Z2Njb4/G+WRw+Y51Nbl8/3B8DLbnWOLrup1dU4jBKNorC8AtR60VU63WHNANWGbF+rmpdUwKrpNAqRGLwMvnxsTgtMky/ZYE2pN8yKDGeuCuDadY6C7W82QySRCHenAp+dL8NtBf+mox5MeIdZxw8q2AdsbDoIyg8ezjgMr+29aj73J4kC7cgFgJlHVFO9AlzXLsBXm6DFZYBj8ObkpXVTEF34QPzgY0BmSS2GeA10JsG0KwA1UI95ydMTA4m2MgJw8SYryr4VgMzA4/C5UqMBCDDlg4M+iMKTJYn0WRXcBVBU9oCJwRaXea5qQJDwbIoYRWYW7bkR6DE2hSowt5IBzGYWD2YdiCBC0NrY+5wnOpMTiJA8CshLu+rTgM+pPrJoh8NsgANJ9Wb0qVwcKwlsBdDaeA3TgMjvq3INDYnwQYgDVDLuuZFgO4Vazn0cwEY1vmWAxQ/5ZjuMhA5HEF7gYuTyIlBrDpZS0nmaGYCqcxmsMzQKx1Txts300/A7B13N0gJQYblFdgqp197KDvd2bhCwZrIQrDUAbb8JS3M+MRbDs9i7B0GEBxUELAWSJtw13Bbo5yjLEwWBSAY4zxzdggXU83SIfBIeS0+TyAdRiTtYACV0pRDBqAVUTI5ypCNfOtxVNhED3kCCjoIjtgvIkGAkoSBOSSPRZgf5llvU8Fu4HXaKTBAHZw5o+8DEBSNqimlT9dhqLKLKo23DnWgxJnQayeGAVoOH1hqTQYwM8JrKhWQFS+i6pgWZStNnA2QQ3XFceQyfDPHSkwWADNXdBhAycPv08zD9WZttUGlojcgRTQ7/BHaFNgAD8n6LgfgU3s2zkALsEMaNtM4PBCe+EXBJonBQbgc6AFHDh5+JoYXt/Qonagv+wqcgMKSwVGaXIGp3C1z4Zj4FvonYKxNOo203GEq/iJAezBvL+U5AzgJZ/wqezXJ7DC3gwT2OGkb7FA5hgxg6gtSD1gXJIzKMOx02AkF77OywCOpdAZgA2A7G4De9OBQpIzCFsxRsvHAKw1AhbEoS1tl9kGfgZEWZIzGCFw4FbDU50W7HUHg/GD+kNPt0b8AlQYc5o+A3CPNIa82VbgPIvQMZXBPjDEkBUcgJZLUIZbYga0ZfOQ8k39TfAiBG1NWYLiy9bsCPmc0C5MYgZxoqFQdb3mrgyvmegIwPhyf3YEYqmCfyGXDgPY9ror5Fnz2R8MGHiHOji8UWBGdwmMkZjbDEAsFYGb+ONiMFsdUt7qwPExIFjsCOzxxEuFjHUVKmFMYyG4ahxOYEAKgTW3BZlRkte6O3ReUwoMwNlsRAaQhYtgcAxUgNwB4KQMqsQMTuB+MGJCISWEEnoPNH6Y02OgXpRaJWZAWTKNmGAMlRXFYBtwEZgWFLGh2NbkfiIU9QDC/EPpDAYazmBGCA4GoQz0DlooJoX1AlRtIcS1CxGlU4XOC9CqDbHzUHoCxdVKzgBcElNDgOGCnU7EhviJM5TFZpALtCedEgOKg0BJDQoXvHRGUWmq4GwSrNEO5fbkDMBYDtZseOOBovCMsi6fhmIA5umkw4AWQEBCaHLpaasdjIzA4XfkzbXaD5gaMGzoFz3XNQUGcMXJU8uUrrDQP68T7JvUrVdmcxtffbZ+2GmzQM4RuNniA0nvS2nssdCTcJg5/0hewG+BH4nbFpqtqQxIaK4fngtsKBKByUm+qtBtShoMqDVA5GzaZnlle39//3B7t9nYnGfMuCLJqRSAhumEvYuFGprlhwhihMyvaTCgWUW76oNbPIe1IFdyiDQEAQywglt0boUtYFLZdw6tOurP1QLrS8qB1nBDMECgpxPagYjCQhDp5GAMN0F7BQVKIwMyLKVTR+X6hh4OTIfBCbSfEy4UjPMPF6CFj/3CeZi24PzVdBkM1YA+gQuh+UiWwW0iU+GDIdxzTys3r8OAueEhAtszOi+JMseFDwYU3FQYA4NYGYbmu4DtSUmvcd9H8frDZoaIY/Pp5Stv07IQKe8C7yG2UXh/osbZQ6YUIeJIWIp56zvVOF2B0p5HQEDEI5rLG2JOo2IwqZ7h2GXJkf2hegM4LRCts6E9gf6bEOh7v1GnZNM9x3LcRAyYSh0UtW3Ww7qTQPf3oFh6H1vYNlX6DPDSbmWTdi7LVSvsPjeAmy016SUgemhmh3G2s+wq9r+J+uUJYzjbd9ZqVJFVA5d/3D9Xxpi/jLbZCo0yHXXI0tp9bE0w72Src7tAjo+lT+25dnturlFuNKzMl4b5QTt0YhwPA5PDRqtTbm/Okt/nYrWIMFvdbDc7hyf0t3Bpp9VsV+fNM32YhVDdbHRa60PdGV9jP+98tkB07E9aHVJHp6enCyOFqGNo4s58v4AyBhkDooxBxoAoY5AxIMoYZAyIMgYZA6KMQcaAKGOQMSBKxOBoYRqUhMHs/JRodmQGjDAtmp8fmUGmTKYWX1wpVWNUAIXJoJCCmEJhRAY9AmBUgCkppeeXSiPe2MP4pkYq/Dsmo7S4uvRhaTr0/RdlNAbMu3ouqeoidylKdUvS5Uc+/PrLy1y9KIpikVxeLJp/mf9YBdSN4iiVKi7/PBoC5l0un1TaZZ4zvh9Y+vXgIIchhFwvy7LGaTwn5mXDMCpXV9c3N98H95MSPofeT5EoJWGgjdT8tvI5UZbXSqqt2y9GREfgOD6fl4zKzf1jt/tFtwazS19HqUcyBqM80SUMUasoWCVzj/32KYQBflaeE3nDuL7oooKuqrp+d3enY9lb9D3hH/Z+lGqMzKDwjud5LoZ43nwPDSsv5zS+D4FfKw0SLHRljadK5HjxsvbtorvIqmo/J0Xo/2HxB+STnqqj+7pJ6xkZxCJgafCB1boOA1VX3tMZcJeXxtq9UlDdaSlm/3d9RxjkY3fP52KQl/s2zRQv8rwWZMCGMZDFj9ddxPZ6ntyccyxMQbcKUFcnmQHHy7JhP9QwZA3oB6EMeONGwY0u6C4C+OV1nfQMwWbQnWQGoihdO07J0hXHxWBARlJ9qaQLuBMUzL8FHZWUrdXHg1+Xlt6VeuaAwIDULzK5XounZ+sHXH2VsWcwVFgSYzDgsE9Q//Gb2u8Cd71zXVW2Dn4YhmT6R0a3p9tGAV1r2IcK6U2Qns0mYgbOUEY3cRjgWoo1GwFpb33ruibW8WjiiYtTf3TMIro3ZJcBnjQGtVU0IgMtLxZ/1e+sOVG9LV0s5ziR2FliaPPcjTO9sk8VOa89J4MYEHwMPsTqB9hqKap+rt6xxPzpF0Vexq+KvUazkPxal7U9BfTlM3E6npFBDNsrc8VVp8sWPojwvAB6+9g5+l0Z4GO7y6LHR89LX0t4ytSxg7H1+8f6M64XEjHQYzHQuI+rvUEW9OLfeAi4i+b594p+d1vqXlxJGh8fwcsw0FEsBnhxqZwPrtqSeC8DjS/+R9UfbwyJOCFTykDmPjieEXaHLVtiCy8/ry4qtZyMZwRiC2JjeCEGN3KOeDLYozEUNwPTRrktqani14IzFP7iNN+yKM/n8CDQsH9oVimun/gyDFS0xJuODJfLVwIMAnOKKD06xzpK3zifPcBKFsd4IQY3NTP2dVmvL0cz4IwtZyyUDE5O9MYTwqCnr15Yun/UIxloa4oTKVGkupys2SeEgVpA1tLh3Dn6Q2XAVxSnHygSn+einzfxDGDRx0JFKQyu6hp5Yv5deosMZE174wwUw28SE0a3X5BB/xtVRQEGQQgeBn8YkiG5JSecGl/KJiqKXsJS8P9BBgGtKQ4+QVG6XUVRnhRbTxWvfYitl/EP9F+MCtGf799/G2LtbDy5GJAtBTKjFHRLT8arZIDXCyL+UOPkh7Wgr+wXJ3VV7zHowdZKD8N4nQxYvF7QzCh7Tg76ykEG9S3VcZbt99ftL54M8RUywOvGfswPr3uBOBKwXlB7no7Q6+l39tgwvaZE+78TFkeC10z1r77zz2rPtb2EGeS06Dd97Qw+b/ml69PJQKf5SA/G8rLHJZD+UKaTQa+gVEwCOd67RZCTed++iZhTpnMs9PAsRzJNzI7gu91Xa67i2lKYJgasqvzL10VR5Dgt6P16az2tDARB//r9+811RarVxTfKgNVVHamLJeVp9eCHhF/rLTJwhNjHb3USOaVEB94AAwGxt1+WJLJhApf2BhgQ26AqB7V8IIj+phhgZ1j5s/7mGJyboRX13LxMwP89SiIH76FOLQOhV/rv/24uHA/wSRJ5+OWmlkHvXFmTNcPJrGGuecqaeHoZqIr0wMvfnav+kmUYwvQyuFWM97LsZBct/vUAM5hem4j7wRrPL18M4iWlK5myvTq1DPCa6e+rD26buHwpws+YWgb/qIXFko5u7f0U5gAvIuHt1QliECMfNh9gQD71MNB7OquaCWYkM1tlFYPLc2KgJIABl2yn6Tlzdb15qqY0TzRkYBl659hXvq6D5QQZGGIO3psZUi+Xq0tlQDqBqnd/FOGSXjkDIcCA54MMVPVW797/K1/SGRBywqtjwJFc3YFI3ropDTNAXjFK9/FGwuZQhsu3GDg3YLvxYgzql+LwkmX5s+tU5VWe5NiLDw9S3Xfg8sOVYRiyHF7aQ8W54eDG4LHtTKDL5Z9GO/G8+G45liTDWC7WarWPRDXJ6H9Y82l5uf+vFF4YudK8lxS2ZhRr8erik/HHTyOecxV+iq2f3ep/4PvU/C5uQUPdElqaqo7GAHefGKeqybX2OfVF/PXi4uAnnkILQxXL4NvdfXIx2QF0pjD6Cfo4v2SAMWtuf+Pc6y3EvCi6aPPYv6uEhL+JYWQAmTJlypQpU6a3qf8DSXAc5XJ9dysAAAAASUVORK5CYII="
                      alt=""
                    />
                    <div class="mb-3">
                      <a href="#" class="mr-1 hover:text-purple-500">Details</a>
                    </div>
                  </BaseCard>
                </li>
              </ul>


              <ul class="timeline clearfix">
                <li class="timeline-line"></li>
                <li class="timeline-group text-center">
                  <BaseBtn class="bg-yellow text-white">
                    <i class="i-Calendar-4"></i> Joined in 2013
                  </BaseBtn>
                </li>
              </ul>
            </TabPanel> 
            <TabPanel>
              <div class="p-5">
                <p class="text-xl font-semibold mb-2">Personal Information</p>
                <p class="border-b border-gray-300 pb-10 mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, commodi quam! Provident quis voluptate asperiores
                  ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Voluptatem, nulla eos? Cum non
                  ex voluptate corporis id asperiores doloribus dignissimos
                  blanditiis iusto qui repellendus deleniti aliquam, vel quae
                  eligendi explicabo.
                </p>
                <div
                  class="
                    grid grid-cols-12
                    gap-5
                    border-b border-gray-300
                    pb-10
                    mb-10
                  "
                >
                  <div class="col-span-12 sm:col-span-6 md:col-span-4">
                    <p class="text-purple-500 mb-1">
                      <i class="i-Face-Style-4 text-base"></i
                      ><span class="ml-1">Profession</span>
                    </p>
                    <span>Programmer</span>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4">
                    <p class="text-purple-500 mb-1">
                      <i class="i-Globe text-base"></i
                      ><span class="ml-1"> Lives In </span>
                    </p>
                    <span>Ethiopia</span>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4">
                    <p class="text-purple-500 mb-1">
                      <i class="i-Edit-Map text-base"></i
                      ><span class="ml-1">Email</span>
                    </p>
                    <span>{{ user.email }}</span>
                  </div>
                  <div class="col-span-12 sm:col-span-6 md:col-span-4">
                    <p class="text-purple-500 mb-1">
                      <i class="i-Professor text-base"></i
                      ><span class="ml-1"> Experience</span>
                    </p>
                    <span>2 Years</span>
                  </div>
                </div>
                <div class="my-5">
                  <p class="text-2xl">{{ user.name }}</p>
                  <p class="text-gray-600">{{ user.type }}</p>
                </div>
                <div class="flex justify-around flex-wrap">
                  <div class="text-center mx-4 my-2">
                    <i class="i-Plane text-4xl text-purple-500"></i>
                    <p class="text-base">Vue</p>
                  </div>
                  <div class="text-center mx-4 my-2">
                    <i class="i-Camera text-4xl text-purple-500"></i>
                    <p class="text-base">Node Js</p>
                  </div>
                  <div class="text-center mx-4 my-2">
                    <i class="i-Car-3 text-4xl text-purple-500"></i>
                    <p class="text-base">Express Js</p>
                  </div>
                  <div class="text-center mx-4 my-2">
                    <i class="i-Gamepad-2 text-4xl text-purple-500"></i>
                    <p class="text-base">MongoDB</p>
                  </div>
                  <div class="text-center mx-4 my-2">
                    <i class="i-Music-Note-2 text-4xl text-purple-500"></i>
                    <p class="text-base">Flutter</p>
                  </div>
                  <div class="text-center mx-4 my-2">
                    <i class="i-Shopping-Bag text-4xl text-purple-500"></i>
                    <p class="text-base">Figma</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <!-- <TabPanel>
              <div class="grid grid-cols-12 gap-5">
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <img
                      class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                      src="/images/faces/16.jpg"
                      alt=""
                      srcset=""
                    />
                    <h5 class="text-lg">Jassica Hike</h5>
                    <p>UI/UX Designer</p>
                    <p class="my-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae cumque.
                    </p>

                    <BaseBtn rounded class="bg-purple-500 text-white"
                      >Contact Jassica</BaseBtn
                    >
                    <div class="card-socials-simple mt-4">
                      <a class="mr-2 hover:text-purple-500" href="#">
                        <i class="i-Linkedin-2"></i>
                      </a>
                      <a class="mr-2 hover:text-purple-500" href="#">
                        <i class="i-Facebook-2"></i>
                      </a>
                      <a class="mr-2 hover:text-purple-500" href="#">
                        <i class="i-Twitter"></i>
                      </a>
                    </div>
                  </BaseCard>
                </div>
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <div class="card-body text-center">
                      <img
                        class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                        src="/images/faces/2.jpg"
                        alt=""
                        srcset=""
                      />
                      <h5 class="text-lg">Frank Powell</h5>
                      <p>UI/UX Designer</p>
                      <p class="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                      </p>
                      <BaseBtn rounded class="bg-purple-500 text-white"
                        >Contact Frank</BaseBtn
                      >
                      <div class="card-socials-simple mt-4">
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Linkedin-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Facebook-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Twitter"></i>
                        </a>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <div class="card-body text-center">
                      <img
                        class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                        src="/images/faces/3.jpg"
                        alt=""
                        srcset=""
                      />
                      <h5 class="text-lg">Arthur Mendoza</h5>
                      <p>UI/UX Designer</p>
                      <p class="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                      </p>
                      <BaseBtn rounded class="bg-purple-500 text-white"
                        >Contact Arthur</BaseBtn
                      >
                      <div class="card-socials-simple mt-4">
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Linkedin-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Facebook-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Twitter"></i>
                        </a>
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div
                  class="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                >
                  <BaseCard class="text-center">
                    <div class="card-body text-center">
                      <img
                        class="w-20 h-20 m-auto rounded-full shadow-lg mb-3"
                        src="/images/faces/4.jpg"
                        alt=""
                        srcset=""
                      />
                      <h5 class="text-lg">Jacqueline Day</h5>
                      <p>UI/UX Designer</p>
                      <p class="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae cumque.
                      </p>
                      <BaseBtn rounded class="bg-purple-500 text-white"
                        >Contact Jacqueline
                      </BaseBtn>
                      <div class="card-socials-simple mt-4">
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Linkedin-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Facebook-2"></i>
                        </a>
                        <a class="mr-2 hover:text-purple-500" href="#">
                          <i class="i-Twitter"></i>
                        </a>
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </TabPanel> -->
            
            <!-- <TabPanel>
              <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/headphone-1.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/headphone-2.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/headphone-3.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/iphone-1.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/iphone-2.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
                <div class="col-span-12 lg:col-span-4 md:col-span-6">
                  <BaseCard noPadding class="relative overflow-hidden">
                    <img
                      class="w-full"
                      src="/images/products/watch-1.jpg"
                      alt=""
                    />
                    <div class="card-img-overlay-profile absolute bottom-0 p-4">
                      <div class="p-1 text-left font-light flex">
                        <span class="mr-3 flex items-center text-white"
                          ><i class="i-Speach-Bubble-6 mr-1"></i>12</span
                        ><span class="flex items-center text-white"
                          ><i class="i-Calendar-4 mr-2"></i>03.12.2018</span
                        >
                      </div>
                    </div>
                  </BaseCard>
                </div>
              </div>
            </TabPanel> -->
          </TabPanels>
        </TabGroup>
      </div>
    </BaseCard>
  </div>
</template>

<script>

export default {
  async created() {
    this.$store.dispatch("profile/fetchAdminData");
  },

  computed: {
    user() {
      return this.$store.getters["profile/adminData"];
    },
  },
};

</script>

<style lang="scss" scoped>
.user-profile {
  .header-cover {
    background-image: url("../../../images/profile-bg.png");
    position: relative;
    background-size: cover;
    padding: 30px;
    background-repeat: no-repeat;
    height: 300px;
  }
  &::after {
    content: "";
    width: 100%;
    height: 300px;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
  }
}

.timeline {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;

  li.timeline-item {
    position: relative;
    width: 50%;
    display: inline-block;

    &:nth-child(even) {
      padding: 0 3rem 3rem 0;
      .timeline-badge {
        left: calc(100% - 24px);
      }
    }
    &:nth-child(odd) {
      float: right;
      padding: 0 0 3rem 3rem;
      margin-top: 6rem;
      .timeline-badge {
        right: calc(100% - 24px);
      }
    }
    .timeline-badge {
      position: absolute;
      width: 48px;
      height: 48px;
    }
    .badge-icon {
      display: inline-block;
      text-align: center;
      font-size: 22px;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      line-height: 48px;
    }
    .badge-img {
      display: inline-block;
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
  }
  li.timeline-group {
    position: relative;
    z-index: 99;
    padding: 0 0 2rem 0;
  }
  .timeline-line {
    position: absolute;
    content: "";
    width: 1px;
    height: 100%;
    background: #d1d5db;
    left: 0;
    right: 0;
    margin: auto;
  }
}
@media (max-width: 767px) {
  .user-profile {
    .header-cover {
      height: 200px;
    }
  }

  .timeline {
    .timeline-line {
      display: none !important;
    }
    li.timeline-item {
      width: 100%;
      padding: 4rem 0 3rem !important;
      &:nth-child(odd) {
        margin-top: 1rem;
      }
      .timeline-badge {
        left: 0 !important;
        right: 0 !important;
        top: -16px;
        margin: auto;
      }
    }

    li.timeline-group {
      padding: 0 0 3rem;
    }
  }
}
</style>
