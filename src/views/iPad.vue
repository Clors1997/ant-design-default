<template>
  <div>
    <div class="flex justify-between mb-10">
      <a-input-search
        placeholder="姓名"
        style="width: 200px"
        @search="onSearch"
      />
      <a-button type="primary">新增</a-button>
    </div>

    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
          >{{ tag.toUpperCase() }}</a-tag
        >
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="editItem(record)">修改</a>
        <a-divider type="vertical" />
        <a @click="deleteItem(record)">删除</a>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  },
  methods: {
    editItem(item) {
      console.log(item)
    },
    deleteItem(item) {
      console.log(item)
    },
    onSearch(val) {
      if (val == '') {
        this.data = data
      } else {
        this.data = data.filter(item => {
          return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1
        })
      }
    }
  }
}
</script>
