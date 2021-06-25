Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            landscapeImages: [
                'img/img-1.jpg',
                'img/img-2.jpg',
                'img/img-3.jpg',
                'img/img-4.jpg'
            ],
            sliderIndex: 0
        },
        created() {
            setInterval(() => {
                this.next();
            }, 3000)
        },
        methods: {
            next: function() {
                if (this.sliderIndex === (this.landscapeImages.length - 1)) {
                    this.sliderIndex = 0;
                } else {
                    this.sliderIndex++;
                }
            },
            prev: function() {
                if (this.sliderIndex === 0) {
                    this.sliderIndex = (this.landscapeImages.length - 1);
                } else {
                    this.sliderIndex--;
                }
            }
        }
    }
)