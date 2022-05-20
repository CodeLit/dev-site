<template>
    <div>
        <b-parallax :img_url="parallax_top" class="min-h-screen flex flex-col justify-center">
            <b-card :blur_amount="20" class="flex flex-col md:flex-row max-w-screen-xl m-7 sm:mx-32 xl:mx-auto">
                <b-card class="p-5" style="box-shadow: 1px 1px white inset">
                    <div class="flex flex-col flex-center">
                        <b-round-box
                            class="mx-auto"
                            alt="User's avatar"
                            :url="avatar"
                            width="400px"
                        />
                        <div class="flex flex-col text-center">
                            <p class="name text-white text-2xl mt-3">Владимир</p>
                            <p class="job text-gray-200 text-lg">Разработчик</p>
                        </div>
                    </div>
                </b-card>
                <div class="p-8 mx-auto text-xl">
                    <h2 class="mb-4 text-center">Добро пожаловать на мой блог!</h2>
                    <p class="mb-4">
                        Если хотите узнать новинки в мире разработок, научиться
                        программировать, или же прочитать моё резюме, то вы
                        попали по адресу. Вся информация на данном ресурсе
                        проверена годами опыта, а также изложена в понятном
                        виде.
                    </p>
                    <div class="flex justify-center gap-5">
                        <b-button class="px-6 py-3 rounded-full"
                                  onclick="$('#who-am-i')[0].scrollIntoView({block: 'start', behavior: 'smooth'})">
                            Почитать резюме
                        </b-button>
                        <b-button class="px-6 py-3 rounded-full"
                                  onclick="$('#contacts')[0].scrollIntoView({block: 'start', behavior: 'smooth'})">
                            Посмотреть контакты
                        </b-button>
                        <!--                        <b-button class="px-6 py-3 rounded-full"-->
                        <!--                                  @click.native="setPage('learn')">Хочу учиться!</b-button>-->

                    </div>

                </div>
            </b-card>
        </b-parallax>
        <b-card id="who-am-i" class="py-9 sm:py-16">
            <div class="container">
                <h2 class="pb-1">Что я умею?</h2>
                <h5 class="my-4">
                    Мой стек:
                    <i class="fab fa-php"></i> PHP,
                    <i class="fab fa-python"></i> Python,
                    <i class="fab fa-golang"></i> GoLang,
                    <i class="fab fa-html5"></i> <i class="fab fa-js"></i> <i class="fab fa-css3"></i> Web.
                </h5>
                <ul>
                    <li>Работать с различными менеджерами пакетов и сборщиками на различных языках (<i
                        class="fab fa-npm"></i> npm, composer, pip, и прочие), а также писать свои библиотеки.
                    </li>
                    <li>Настраивать автодеплой с помощью <i class="fab fa-git-alt"></i> Git хуков, или через SSH, а
                        также в ручную через git push production. Умею решать конфликты веток, делать merge.
                    </li>
                    <li>Строить сборки и запускать автоматизированные тесты, работать с интеграциями (CI), например,
                        Travis, <i class="fab fa-github"></i> Github Actions, или CircleCI.
                    </li>
                    <li>Разворачивать собственные проекты с нуля до стадии релиза, настраивать взаимодействие между
                        приложениями, сайтами через HTTP/REST API.
                    </li>
                    <li>Разворачивать проекты, создавать образы с помощью <i class="fab fa-docker"></i> Docker.</li>
                    <li>Писать проекты для онлайн-игр, имею собственный проект серверов <a href="https://neolife.tk"
                                                                                           target="_blank">NeoLife</a>.
                    </li>
                    <li>Настраивать сервера на базе <i class="fab fa-linux"></i> Linux /
                        <i class="fab fa-fedora"></i> Fedora (в основном <i class="fab fa-centos"></i> Centos 8),
                        автоматизировать рутинные задачи с помощью Cron.
                    </li>
                    <li>Пользоваться шаблонами (Jinja, Blade) веб-страниц, тегами шаблонов, пользоваться компонентным
                        подходом при вставке элементов сайта.
                    </li>
                    <li>Автоматически создавать документацию с помощью внешних генераторов документации.</li>
                    <li>Читать чужой код, и пользоваться инструментами для отладки, писать полные и понятные комментарии
                        к коду.
                    </li>
                    <li>Понятно и довольно быстро обучать других людей, заинтересованных в обучении.</li>
                </ul>
                <br><br><br>
                <h2 class="pb-1">Что я знаю?</h2>
                <h5 class="my-4">
                    Фреймворки:
                    <i class="fab fa-laravel"></i> Laravel, Django.
                </h5>
                <ul>
                    <li>ООП, классы, объекты (instance), методы классов, интерфейсы (описатели классов), конструкторы,
                        указатели и прочие базовые вещи.
                    </li>
                    <li>Все основные команды <i class="fab fa-git-alt"></i> Git (которые мне кажутся основными)</li>
                    <li>Принципы SOLID, Dry, Kis, и другие</li>
                    <li>Синтаксис баз данных, построение запросов, транзакций</li>
                    <li>Запросы в GraphQL и FaunaDB</li>
                    <li>HTTP/REST API запросы и ответы, к примеру библиотеку Ajax, или Axios</li>
                    <li>Асинхронный код, многопоточность, Promises, и прочее</li>
                    <li>Языки <i class="fab fa-python"></i> Python, <i class="fab fa-golang"></i> GoLang, веб-языки,
                        включая
                        <i class="fab fa-php"></i> PHP,
                        <i class="fab fa-js"></i> JS и стандарт EcmaScript,
                        1С, Lua
                    </li>
                    <li>Регулярные выражения (RegExp), выборки из строк</li>
                    <li>Хеш-таблицы и хеш-функции для малозатратного поиска</li>
                </ul>
                <b-button class="px-6 py-3 rounded-full mt-5"
                          onclick="$('#contacts')[0].scrollIntoView({block: 'start', behavior: 'smooth'})">
                    Связаться со мной
                </b-button>
            </div>
        </b-card>
        <b-parallax :img_url="parallax_bottom" class="min-h-screen text-center py-72">
            <documents/>
        </b-parallax>

        <b-footer/>
    </div>
</template>
<script>
import parallax_top from "../../../images/sky/kristopher-roller.jpg";
import parallax_bottom from "../../../images/humans/macbook-and-books.jpg";
import avatar from '../../../images/avatar.jpg'
import BParallax from "../b-Parallax";
import BCard from "../b-Card";
import BButton from "../b-Button";
import BDocument from "../b-Document";
import BFooter from "../layouts/b-Footer";
import Documents from "../layouts/b-Documents";

export default {
    components: {Documents, BFooter, BDocument, BButton, BCard, BParallax},
    data() {
        return {avatar, parallax_top, parallax_bottom}
    },
    methods: {
        setPage(page) {
            this.$store.commit('setCurrentPage', page)
        }
    }
}
</script>
