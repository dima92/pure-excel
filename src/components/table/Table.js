import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
    static className = 'excel_table'

    toHTML() {
      return createTable(20)
    }
}
