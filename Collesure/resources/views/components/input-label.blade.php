@props(['value'])

<label {{ $attributes->merge(['class' => 'block font-medium text-sm text-gray-700   border-b-4 border-orange-color mb-4 pl-4 mr-8 text-xl']) }}>
    {{ $value ?? $slot }}
</label>
