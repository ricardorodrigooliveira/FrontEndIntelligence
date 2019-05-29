---
layout: page
---
<ul>
{% for i in site.data.alunos %}
    <li>
    {{ i.nome }} : {{ i.idade }} anos
    </li>
{% endfor %}
</ul>