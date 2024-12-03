<template>
    <div class="welcome_item">
        <i>
            <!-- 具名插槽 -->
            <slot name="icon"></slot>
        </i>
        <div class="welcome_item-details">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <!-- 默认插槽 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeItem'
}
</script>

<style scoped lang="scss">
@media screen {
    /* 这是移动端的 */
    .welcome_item {
        display: flex;
        margin-top: 2rem;

        i {
            display: flex;
            place-items: center;
            place-content: center;
            width: 32px;
            height: 32px;
            color: var(--color-text);
        }
        &-details {
            flex: 1;
            margin-left: 1rem;
            h3 {
                margin-bottom: 0.4rem;
                font-size: 1.2rem;
                font-weight: 500;
                color: vart(--color-heading);
            }
        }
        /* pc 端 */
        @media (min-width: 1024px) {
            position: relative;
            margin-top: 0;
            padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);

            i {
                position: absolute;
                top: calc(50% - 25px);
                left: -26px;
                width: 50px;
                height: 50px;
                border: 1px solid var(--color-border);
                background: var(--color-background);
                border-radius: 8px;
            }
            /* 盒子上边短线 */
            &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: calc(50% + 25px);
                height: calc(50% - 25px);
                border-left: 1px solid var(--color-border);
            }
            /* 盒子下边短线 */
            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                height: calc(50% - 25px);
                border-left: 1px solid var(--color-border);
            }
            /* 去掉第一个上边短线和最后一个下边短线 */
            &:first-of-type::before,
            &:last-of-type::after {
                border: none;
            }
        }
    }
}
</style>
