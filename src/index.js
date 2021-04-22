import {Excell} from '@/components/excell/Excell';
import './scss/index.scss'
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const excell = new Excell('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
})

excell.render()
