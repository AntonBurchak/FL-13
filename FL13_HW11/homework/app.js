const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

const parser = (data, parent = rootNode) => {
  const list = document.createElement('ul');
  if (parent.classList.contains('folder')) {
    list.classList.add('hide');
  }
  data.forEach(file => {

    const li = document.createElement('li');
    const icon = `<i class="material-icons">${file.folder ? 'folder' : 'insert_drive_file'}</i>`

    file.folder ? li.classList.add('folder') : li.classList.add('file')

    li.innerHTML = `<p>${icon} <span>${file.title}</span></p>`;

    if (file.children) {
      parser(file.children, li)
    } else if (!file.children && file.folder) {
      li.innerHTML += `<ul class="hide"><li class="empty">Folder is empty</li></ul>`
    }

    list.appendChild(li);

  })
  parent.appendChild(list);
}
parser(data);

rootNode.querySelector('#root ul').addEventListener('click', (e) => {
  const li = e.target.offsetParent;
  console.log(e, e.target, e.target.offsetParent.tagName);
  if (e.target.offsetParent.tagName === 'LI' && li.classList.contains('folder')) {
    li.querySelector('ul').classList.toggle('hide');

    if (li.querySelector('ul').classList.contains('hide')) {
      li.querySelector('i').textContent = 'folder';
    } else {
      li.querySelector('i').textContent = 'folder_open';
    }
  }
});


const ol = document.createElement('ol');
ol.classList.add('menu');
ol.innerHTML = '<li id="rename">Rename</li><li id="delete">Delete</li>';
document.body.appendChild(ol);

const menu = document.querySelector('ol.menu');
let elem = null;

function showMenu(x, y) {
  menu.style.left = x + 'px';
  menu.style.top = y + 'px';
  menu.classList.add('show-menu');
}
function hideMenu() {
  menu.classList.remove('show-menu');
}
function onContextMenu(e) {
  e.preventDefault();
  showMenu(e.pageX, e.pageY);
  elem = e.target;
  document.addEventListener('mousedown', onMouseDown, false);
}
function onMouseDown(e) {
  if (e.target.id === 'rename' || e.target.id === 'delete') {
    if (e.target.id === 'rename') {

      const span = elem.parentElement.querySelector('span');
      span.innerHTML = `<input type="text" value="${span.textContent}">`;
      setTimeout(() => span.querySelector('input[type=text]').focus(), 0)

      span.querySelector('input[type=text]').onchange = () => {
        span.innerHTML = span.querySelector('input[type=text]').value;
      }

      span.querySelector('input[type=text]').onblur = () => {
        span.innerHTML = span.querySelector('input[type=text]').value;
      }
    }

    if (e.target.id === 'delete') {
      elem.offsetParent.remove();
      checkIsEmpty()
    }

    hideMenu();
  } else {
    hideMenu();
    document.removeEventListener('mousedown', onMouseDown);
  }

}
document.addEventListener('contextmenu', onContextMenu, false);


function checkIsEmpty() {
  const li = document.querySelectorAll('li.folder');
  li.forEach(el => {
    if (el.children[1].childNodes.length === 0) {
      el.children[1].innerHTML = 'Folder is empty';
    }
  });
}