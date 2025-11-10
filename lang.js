
(function(){
  const dict = {
    en: {
      "nav.home":"Home","nav.products":"Products","nav.about":"About","nav.contact":"Contact",
      "home.headline":"Dive into Style","home.sub":"Luxury Swimwear by SwimShark","home.cta":"Explore Collection",
      "home.cat1":"Classic Bikini","home.cat2":"One-piece Sculpt","home.cat3":"High-Waist Set",
      "products.title":"Signature Collection","products.sub":"An elegant curation of our best-selling swimwear.",
      "prod.1.name":"Classic Bikini","prod.1.desc":"Explore the Classic Bikini collection.",
      "prod.2.name":"High-Waist Set","prod.2.desc":"Explore the High-Waist Set collection.",
      "prod.3.name":"One-piece Sculpt","prod.3.desc":"Explore the One-piece Sculpt collection.",
      "prod.4.name":"Triangle Top","prod.4.desc":"Explore the Triangle Top collection.",
      "prod.5.name":"Ribbed Contour","prod.5.desc":"Explore the Ribbed Contour collection.",
      "prod.6.name":"Metal Ring Set","prod.6.desc":"Explore the Metal Ring Set collection.",
      "about.title":"About SwimShark","about.storyTitle":"Our Story",
      "about.storyBody":"SwimShark is dedicated to crafting elegant, confident swimwear with fine craftsmanship and modern aesthetics.",
      "about.factoryTitle":"Our Capability",
      "about.factoryBody":"From pattern development to production, we ensure quality and on-time delivery, supporting flexible MOQs for global clients.",
      "contact.title":"Contact Us","contact.emailTitle":"Email","contact.addrTitle":"Address",
      "contact.formTitle":"Send us a message","contact.form.name":"Name","contact.form.email":"Email",
      "contact.form.msg":"Message","contact.form.send":"Send","contact.form.note":"* Demo form — replace with a provider later.",
      "detail.tagline":"Discover more looks in this collection."
    },
    zh: {
      "nav.home":"首页","nav.products":"产品","nav.about":"关于我们","nav.contact":"联系我们",
      "home.headline":"Dive into Style","home.sub":"SwimShark 高级奢华泳装","home.cta":"查看系列",
      "home.cat1":"经典比基尼","home.cat2":"雕塑连体","home.cat3":"高腰套装",
      "products.title":"标志系列","products.sub":"优雅呈现我们的畅销泳装。",
      "prod.1.name":"经典比基尼","prod.1.desc":"进入 Classic Bikini 系列查看更多。",
      "prod.2.name":"高腰套装","prod.2.desc":"进入 High-Waist Set 系列查看更多。",
      "prod.3.name":"雕塑连体","prod.3.desc":"进入 One-piece Sculpt 系列查看更多。",
      "prod.4.name":"三角上装","prod.4.desc":"进入 Triangle Top 系列查看更多。",
      "prod.5.name":"罗纹塑形","prod.5.desc":"进入 Ribbed Contour 系列查看更多。",
      "prod.6.name":"金属环套装","prod.6.desc":"进入 Metal Ring Set 系列查看更多。",
      "about.title":"关于 SwimShark","about.storyTitle":"品牌故事",
      "about.storyBody":"SwimShark 致力于以精致工艺与当代美学打造优雅、自信的泳装。",
      "about.factoryTitle":"生产能力",
      "about.factoryBody":"从纸样开发到批量生产，我们确保稳定品质与准时交付，并为全球客户提供灵活 MOQ。",
      "contact.title":"联系我们","contact.emailTitle":"邮箱","contact.addrTitle":"地址",
      "contact.formTitle":"给我们留言","contact.form.name":"姓名","contact.form.email":"邮箱",
      "contact.form.msg":"留言内容","contact.form.send":"发送","contact.form.note":"* 演示表单 —— 上线时可替换为第三方表单。",
      "detail.tagline":"探索本系列的更多款式。"
    }
  };

  function applyLang(lang){
    document.querySelectorAll("[data-i18n]").forEach(node=>{
      const key = node.getAttribute("data-i18n");
      const text = (dict[lang] && dict[lang][key]) || node.textContent;
      node.textContent = text;
    });
    try{ localStorage.setItem("swim_lang", lang); } catch(e){}
  }
  function init(){
    document.querySelectorAll("[data-lang]").forEach(btn=>{
      btn.addEventListener("click", ()=> applyLang(btn.getAttribute("data-lang")));
    });
    let lang = "en";
    try{ lang = localStorage.getItem("swim_lang") || "en"; } catch(e){}
    applyLang(lang);
  }
  if(document.readyState==="loading"){ document.addEventListener("DOMContentLoaded", init); }
  else{ init(); }
})();
