Vue.component('faq_accordion_1721919279', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Everything About Buying Books Online</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to commonly asked questions about our book buying app</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What types of books can I buy?",
          a: "Our app offers a vast selection of books across various genres like fiction, non-fiction, academic texts, children's books, and more from numerous publishers and authors."
        },
        {
          q: "How do I place an order?",
          a: "Browse through our book catalog, add desired titles to your cart, proceed to checkout, provide shipping and payment details, and your order will be processed swiftly."
        },
        {
          q: "Are there any discounts available?",
          a: "Yes, we regularly offer discounts on selected books as well as sitewide promotions. Subscribe to our newsletter to stay updated on the latest deals and offers."
        },
        {
          q: "How long does delivery take?",
          a: "Delivery times may vary based on your location, but we strive to deliver most orders within 5-7 business days. Expedited shipping options are also available at checkout for faster delivery."
        },
        {
          q: "Do you offer returns or exchanges?",
          a: "Absolutely, we have a hassle-free return policy. If you're not satisfied with your purchase, you can return or exchange the book within 30 days of delivery for a full refund or replacement."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});