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
                    <p>
                        Если хотите узнать новинки в мире разработок, научиться
                        программировать, или же прочитать моё резюме, то вы
                        попали по адресу. Вся информация на данном ресурсе
                        проверена годами опыта, а также изложена в понятном
                        виде.
                    </p>
                    <div class="float-right">
                        <b-button class="px-6 py-3 rounded-full"
                                  @click.native="setPage('learn')">Хочу учиться!</b-button>
                        <b-button class="px-6 py-3 rounded-full"
                                  onclick="$('#what-am-i')[0].scrollIntoView({block: 'start', behavior: 'smooth'})">
                            Хочу почитать резюме</b-button>
                    </div>

                </div>
            </b-card>
        </b-parallax>
        <b-card id="what-am-i" class="py-9 sm:py-16">
            <div class="container">
                <h2>Что я умею?</h2>
                <ul>
                    <li>Работать с различными менеджерами пакетов и сборщиками на различных языках (npm, composer, pip, и прочие), а также писать свои библиотеки.</li>
                    <li>Настраивать автодеплой с помощью Git хуков, или через SSH, а также в ручную через git push production. Умею решать конфликты веток, делать merge.</li>
                    <li>Строить сборки и запускать автоматизированные тесты, работать с интеграциями (CI), например, TravisCI, CircleCI, или Git Actions.</li>
                    <li>Разворачивать собственные проекты с нуля до стадии релиза, настраивать взаимодействие между приложениями, сайтами через HTTP/REST API.</li>
                    <li>Разворачивать проекты, создавать образы с помощью Docker.</li>
                    <li>Писать проекты для онлайн-игр, имею собственный проект серверов https://neolife.tk</li>
                    <li>Настраивать сервера на базе Linux/Fedora (в основном Centos 8), автоматизировать рутинные задачи с помощью Cron.</li>
                    <li>Пользоваться шаблонами (Jinja, Blade) веб-страниц, тегами шаблонов, пользоваться компонентным подходом при вставке элементов сайта.</li>
                    <li>Автоматически создавать документацию с помощью внешних генераторов документации.</li>
                    <li>Читать чужой код, и пользоваться инструментами для отладки, писать полные и понятные комментарии к коду.</li>
                    <li>Понятно и довольно быстро обучать других людей, заинтересованных в обучении.</li>
                </ul>
                <br><br><br>
                <h2>Что я знаю?</h2>
                <ul>
                    <li>ООП, классы, объекты (instance), методы классов, интерфейсы (описатели классов), конструкторы, указатели и прочие базовые вещи.</li>
                    <li>Все основные команды Git (которые мне кажутся основными)</li>
                    <li>Принципы SOLID, Dry, Kis, и другие</li>
                    <li>Синтаксис баз данных, построение запросов, транзакций</li>
                    <li>Запросы в GraphQL и FaunaDB</li>
                    <li>HTTP/REST API запросы и ответы, к примеру библиотеку Ajax, или Axios</li>
                    <li>Асинхронный код, многопоточность, Promises, и прочее</li>
                    <li>Языки Python, веб-языки, включая PHP, JS и стандарт EcmaScript, 1С, Lua</li>
                    <li>Регулярные выражения (RegExp), выборки из строк</li>
                    <li>Хеш-таблицы и хеш-функции для малозатратного поиска</li>
                </ul>

            </div>
        </b-card>
        <b-parallax :img_url="parallax_bottom" class="min-h-screen text-center py-72">
            <b-card class="py-5 px-2">
                <h1>Мои сертификаты</h1>
                <br>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                    <b-document src="https://drive.google.com/file/d/1uE-ShssmbRxzdE_SPvAvRW56vr7JIWKr/preview" />
                    <b-document src="https://drive.google.com/file/d/1GgeURQPB2zlRR5wwMxcD8T0JqIKWMrq6/preview" />
                    <b-document src="https://drive.google.com/file/d/1H4RdhtXnytuQZS5g2A4KiSGVb9lbNbQw/preview" />
                    <b-document src="https://drive.google.com/file/d/1PZcQc91sz3nvNRg2_P1KqCraIHMm5wtt/preview" />
                    <b-document src="https://drive.google.com/file/d/1CPlG_L8fPjDaTBFnMy9XgFWHvFRcgXFs/preview" />
                    <b-document src="https://drive.google.com/file/d/1oD4gXBl1kWHQk7Ix_PajnraKPpmCiVoM/preview" />
                    <b-document src="https://drive.google.com/file/d/1IxP-APFugsy5RvnfIsqlVmORTM3_3tJJ/preview" />
                    <b-document src="https://drive.google.com/file/d/1-qhD8PRYnCAKuQDTI1L24CTm2YZ3eWbO/preview" />
                </div>
            </b-card>
            <b-card class="mt-72 py-5 px-2">
                <h2>Другие документы</h2>
                <br>
                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                    <b-document src="https://drive.google.com/file/d/1jxUd-5pAg14WKaTxWYxRAu0a631Oe9m7/preview" />
                    <b-document src="https://drive.google.com/file/d/1jxmG3aGB8zHww3Mr2YA2akM3u8hi7Jgf/preview" />
                    <b-document src="https://drive.google.com/file/d/18dZUW0pmNExtOUJps8oMzsmUyC2ZSyUY/preview" />
                    <b-document src="https://drive.google.com/file/d/1Bs6SrlU-qFR-EpZUFjIcQFfiIZD_jBsG/preview" />
                    <b-document src="https://drive.google.com/file/d/1CpPRPsfi9FDjAo2UTNEy3X7AW9Q9RLrE/preview" />
                    <b-document src="https://drive.google.com/file/d/1pc4EDPmwTyqPta-wzjtkksF8ZRhd0PlN/preview" />
                </div>
            </b-card>
        </b-parallax>

        <b-footer />
    </div>
</template>
<script>
import parallax_top from "../../../images/sky/kristopher-roller.jpg";
import parallax_bottom from "../../../images/humans/macbook-and-books.jpg";
import avatar from '../../../images/avatar.jpg'
import BParallax from "../bParallax";
import BCard from "../bCard";
import BButton from "../bButton";
import BDocument from "../bDocument";
import BFooter from "../layouts/bFooter";

export default {
    components: {BFooter, BDocument, BButton, BCard, BParallax},
    data() {
        return { avatar, parallax_top,parallax_bottom }
    },
    methods:{
        setPage(page){
            this.$store.commit('setCurrentPage', page)
        }
    }
}
</script>
