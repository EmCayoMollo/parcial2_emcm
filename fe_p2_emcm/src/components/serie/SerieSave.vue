<script setup lang="ts">
import type { Serie } from '@/models/serie'
import http from '@/plugins/axios'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { computed, ref, watch } from 'vue'


const ENDPOINT = 'series'
const props = defineProps({
    mostrar: Boolean,
    serie: {
        type: Object as () => Serie,
        default: () => ({}) as Serie
    },
    modoEdicion: Boolean
})
const emit = defineEmits(['guardar', 'close'])

const dialogVisible = computed({
    get: () => props.mostrar,
    set: (value) => {
        if (!value) emit('close')
    }
})

const serie = ref<Serie>({ ...props.serie })
watch(
    () => props.serie,
    (newVal) => {
        serie.value = { ...newVal }
    }
)

async function handleSave() {
    try {
        const body = {
            titulo: serie.value.titulo,
            sinopsis: serie.value.sinopsis,
            director: serie.value.director,
            temporadas: serie.value.temporadas,
            fechaEstreno: serie.value.fechaEstreno,
            tipoClasificasion: serie.value.tipoClasificasion,
        }
        if (props.modoEdicion) {
            await http.patch(`${ENDPOINT}/${serie.value.id}`, body)
        } else {
            await http.post(ENDPOINT, body)
        }
        emit('guardar')
        serie.value = {} as Serie
        dialogVisible.value = false
    } catch (error: any) {
        alert(error?.response?.data?.message)
    }
}
</script>

<template>
    <div class="card flex justify-center">

        <Dialog v-model:visible="dialogVisible" :header="props.modoEdicion ? 'Editar' : 'Crear'" style="width: 25rem">
            <div class="flex items-center gap-4 mb-4">
                <label for="titulo" class="font-semibold w-4">Titulo</label>
                <InputText id="titulo" v-model="serie.titulo" class="flex-auto" autocomplete="off" autofocus />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="sinopsis" class="font-semibold w-4">Sinopsis</label>
                <InputText id="sinopsis" v-model="serie.sinopsis" class="flex-auto" autocomplete="off" autofocus />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="director" class="font-semibold w-4">Director</label>
                <InputText id="director" v-model="serie.director" class="flex-auto" autocomplete="off" autofocus />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="temporadas" class="font-semibold w-4">Temporadas</label>
                <InputText id="temporadas" v-model="serie.temporadas.toString" class="flex-auto" autocomplete="off"
                    autofocus />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="fechaEstreno" class="font-semibold w-4">Fecha de estreno</label>
                <InputText id="fechaLanzamiento" v-model="serie.fechaEstreno.getFullYear.toString" mask="2012-12-12"
                    placeholder="2012-12-12" class="flex-auto" autocomplete="off" />
            </div>


            <!-- <script setup>
        <div class="flex items-center gap-4 mb-4">
            <Select v-model="seleccionar" :options="categoria" 
            optionLabel="name" placeholder="Seleccionar Clasificasion" class="font-semibold w-4" />
        

        const seleccionar = ref();
        const categoria = ref([
                    { name: 'Todo publico', code: 'A' },
                    { name: 'Para niños', code: 'B' },
                    { name: 'mayores a 12 años', code: 'B12' },
                    { name: 'mayores a 15 años', code: 'B15' },
                    { name: 'mayores a 18 años', code: 'B18' }
        ]);
    </div>
        </script> -->


            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancelar" icon="pi pi-times" severity="secondary"
                    @click="dialogVisible = false"></Button>
                <Button type="button" label="Guardar" icon="pi pi-save" @click="handleSave"></Button>
            </div>
        </Dialog>
    </div>
</template>

<style scoped></style>