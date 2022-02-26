<template>
  <div>
    <h2 v-for="(user, idx) in users" :key="idx">이름 : {{ user.name }} 직업 : {{ user.job }} - {{ idx }}
      <ul>
        <li v-for="(o, idx) in user.hobby" :key="idx">{{ o }}</li>
      </ul>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      arr : ["obj1","obj2","obj3"],
      users : [{name:'tester', job:'programmer', hobby:['축구','농구','야구']},{name:'tester2', job:'doctoer', hobby:['책읽기','드라이브','여행']}]
    }
  }
}
</script>