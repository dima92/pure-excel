import {storage} from '@core/utils'

function toHTML(key) {
  const model = storage(key)
  const id = key.split(':')[1]
  return `
    <li class="db_record">
      <a href="#excel/${id}">${model.title}</a>
      <strong>
        ${new Date(model.openedDate).toLocaleDateString()}
        ${new Date(model.openedDate).toLocaleTimeString()}
      </strong> 
    </li>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()

  if (!keys.length) {
    return `<p>Вы пока не создали ни одной таблицы</p>`
  }

  return `
    <div class="db_list-header">
      <span>Название</span>
      <span>Дата открытия</span>
    </div>

    <ul class="db_list">
      ${keys.map(toHTML).join('')}
    </ul>
  `
}

